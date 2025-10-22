import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import {
    sendOrderEmail
} from './smtp.js';
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

// Routes
app.post('/api/order', async (req, res) => {
    try {
        const {
            name,
            description,
            phone,
            address
        } = req.body;

        // Валидация
        if (!name || !description || !phone || !address) {
            return res.status(400).json({
                success: false,
                message: 'Все поля обязательны для заполнения'
            });
        }

        // Отправка email
        const emailResult = await sendOrderEmail({
            name,
            description,
            phone,
            address
        });

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
            message: 'Ошибка при отправке заказа. Пожалуйста, попробуйте позже.'
        });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});