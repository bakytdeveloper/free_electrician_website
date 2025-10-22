import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE || 'gmail',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    }
});

export const sendOrderEmail = async (orderData) => {
    try {
        const {
            name,
            description,
            phone,
            address
        } = orderData;
        const orderDate = new Date().toLocaleString('ru-RU');

        const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { 
              font-family: Arial, sans-serif; 
              line-height: 1.6; 
              color: #333; 
            }
            .container { 
              max-width: 600px; 
              margin: 0 auto; 
              padding: 20px; 
              border: 1px solid #ddd; 
              border-radius: 10px; 
            }
            .header { 
              background: linear(135deg, #667eea 0%, #764ba2 100%); 
              color: white; 
              padding: 20px; 
              text-align: center; 
              border-radius: 10px 10px 0 0; 
              margin: -20px -20px 20px -20px; 
            }
            .order-details { 
              background: #f8f9fa; 
              padding: 15px; 
              border-radius: 5px; 
              margin: 15px 0; 
            }
            .field { 
              margin-bottom: 10px; 
              padding: 8px; 
              background: white; 
              border-radius: 5px; 
              border-left: 4px solid #667eea; 
            }
            .urgent { 
              color: #e74c3c; 
              font-weight: bold; 
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎯 Новый заказ на сайте</h1>
              <p>Дата получения: ${orderDate}</p>
            </div>
            
            <div class="order-details">
              <h2>📋 Информация о заказе:</h2>
              
              <div class="field">
                <strong>👤 Имя клиента:</strong> ${name}
              </div>
              
              <div class="field">
                <strong>📞 Телефон:</strong> 
                <a href="tel:${phone}" style="color: #667eea; text-decoration: none;">
                  ${phone}
                </a>
              </div>
              
              <div class="field">
                <strong>📍 Адрес:</strong> ${address}
              </div>
              
              <div class="field">
                <strong>🔧 Описание проблемы:</strong><br>
                ${description.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px; padding: 15px; background: #e8f5e8; border-radius: 5px;">
              <strong>⚠️ СРОЧНО СВЯЗАТЬСЯ С КЛИЕНТОМ</strong>
            </div>
          </div>
        </body>
      </html>
    `;

        const text = `
      НОВЫЙ ЗАКАЗ НА САЙТЕ
      
      Дата: ${orderDate}
      Имя: ${name}
      Телефон: ${phone}
      Адрес: ${address}
      Описание: ${description}
      
      СРОЧНО СВЯЗАТЬСЯ С КЛИЕНТОМ!
    `;

        await transporter.sendMail({
            from: process.env.SMTP_FROM || `"Сайт электрика" <${process.env.SMTP_USER}>`,
            to: process.env.ADMIN_EMAIL,
            subject: `🎯 НОВЫЙ ЗАКАЗ: ${name} - ${address}`,
            html: html,
            text: text
        });

        return {
            success: true
        };

    } catch (error) {
        console.error('Email sending error:', error);
        return {
            success: false,
            error: error.message
        };
    }
};