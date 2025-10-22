import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { sendOrderEmail, verifySMTPConnection } from './smtp.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Проверка SMTP при запуске
verifySMTPConnection();

// Routes
app.post('/api/order', async (req, res) => {
    try {
        console.log('Получен запрос на /api/order:', req.body);

        const { name, description, phone, address } = req.body;

        // Валидация
        if (!name || !description || !phone || !address) {
            console.log('Ошибка валидации: не все поля заполнены');
            return res.status(400).json({
                success: false,
                message: 'Все поля обязательны для заполнения'
            });
        }

        console.log('Данные прошли валидацию, отправляем email...');

        // Отправка email
        const emailResult = await sendOrderEmail({
            name,
            description,
            phone,
            address
        });

        console.log('Результат отправки email:', emailResult);

        if (emailResult.success) {
            res.json({
                success: true,
                message: 'Заказ успешно отправлен! Мы свяжемся с вами в ближайшее время.'
            });
        } else {
            throw new Error(emailResult.error);
        }

    } catch (error) {
        console.error('Order error:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка при отправке заказа: ' + error.message
        });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        smtp: process.env.SMTP_USER ? 'configured' : 'not configured'
    });
});

// Test email endpoint
app.post('/api/test-email', async (req, res) => {
    try {
        const testResult = await sendOrderEmail({
            name: 'Тестовый клиент',
            description: 'Это тестовый заказ для проверки работы системы',
            phone: '+79991234567',
            address: 'Тестовый адрес'
        });

        if (testResult.success) {
            res.json({
                success: true,
                message: 'Тестовый email успешно отправлен'
            });
        } else {
            res.status(500).json({
                success: false,
                message: 'Ошибка отправки тестового email: ' + testResult.error
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Ошибка: ' + error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📧 SMTP User: ${process.env.SMTP_USER}`);
    console.log(`👤 Admin Email: ${process.env.ADMIN_EMAIL}`);
});