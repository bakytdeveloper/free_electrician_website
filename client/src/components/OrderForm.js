import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';

const OrderForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        description: ''
    });
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ show: false, type: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setAlert({ show: false, type: '', message: '' });

        try {
            const response = await fetch('http://localhost:5000/api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.success) {
                setAlert({
                    show: true,
                    type: 'success',
                    message: result.message
                });
                setFormData({
                    name: '',
                    phone: '',
                    address: '',
                    description: ''
                });
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            setAlert({
                show: true,
                type: 'danger',
                message: error.message || 'Произошла ошибка при отправке заказа'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="order" className="py-5 gradient-bg text-white">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <div
                            className="bg-white rounded-4 shadow-lg p-4 p-md-5"
                            data-aos="fade-up"
                        >
                            <div className="text-center mb-4">
                                <h2 className="h1 fw-bold text-dark mb-2">
                                    🚀 Вызвать электрика
                                </h2>
                                <p className="text-muted">
                                    Заполните форму и мы свяжемся с вами в течение 15 минут
                                </p>
                            </div>

                            {alert.show && (
                                <Alert
                                    variant={alert.type}
                                    className="border-0 rounded-3"
                                    data-aos="fade-in"
                                >
                                    {alert.message}
                                </Alert>
                            )}

                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-semibold text-dark">
                                                👤 Ваше имя *
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Пупкин Великолепный"
                                                required
                                                className="border-2 py-3"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-semibold text-dark">
                                                📞 Телефон *
                                            </Form.Label>
                                            <Form.Control
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+996 (777) 12-34-56"
                                                required
                                                className="border-2 py-3"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-semibold text-dark">
                                        📡 Адрес *
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="г.Бишкек, мкр.Кок-Жар, д. 4, кв. 777"
                                        required
                                        className="border-2 py-3"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label className="fw-semibold text-dark">
                                        🔧 Описание проблемы *
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        placeholder="Опишите подробно вашу проблему или необходимые работы..."
                                        required
                                        className="border-2 py-3"
                                    />
                                </Form.Group>

                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="btn-electric w-100 py-3 fw-bold fs-5 border-0"
                                >
                                    {loading ? (
                                        <>
                                            <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                                className="me-2"
                                            />
                                            Отправка...
                                        </>
                                    ) : (
                                        '📨 Отправить заявку'
                                    )}
                                </Button>

                                <div className="text-center mt-3">
                                    <small className="text-muted">
                                        * Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                                    </small>
                                </div>
                            </Form>
                        </div>

                        {/* Контактная информация */}
                        <Row className="mt-5 text-center">
                            <Col md={4} className="mb-3" data-aos="fade-up" data-aos-delay="100">
                                <div className="text-white">
                                    <div className="h4 mb-2">📞 Телефон</div>
                                    <a href="tel:+79991234567" className="text-white text-decoration-none h5">
                                        +996 (777) 12-34-56
                                    </a>
                                </div>
                            </Col>
                            <Col md={4} className="mb-3" data-aos="fade-up" data-aos-delay="200">
                                <div className="text-white">
                                    <div className="h4 mb-2">🕒 График работы</div>
                                    <div className="h5">Круглосуточно 24/7</div>
                                </div>
                            </Col>
                            <Col md={4} className="mb-3" data-aos="fade-up" data-aos-delay="300">
                                <div className="text-white">
                                    <div className="h4 mb-2">📡 Зона работы</div>
                                    <div className="h5">Весь город и область</div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default OrderForm;