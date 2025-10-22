import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="h4 mb-3">⚡ ЭлектроМастер</div>
                        <p className="text-light mb-0">
                            Профессиональные электромонтажные работы с гарантией качества.
                            Работаем круглосуточно для вашего комфорта.
                        </p>
                    </Col>
                    <Col md={6} className="text-md-end">
                        <div className="h5 mb-3">Контакты</div>
                        <p className="text-light mb-1">
                            📞 <a href="tel:+79991234567" className="text-white text-decoration-none">
                            +7 (999) 123-45-67
                        </a>
                        </p>
                        <p className="text-light mb-0">
                            🕒 Круглосуточно 24/7
                        </p>
                    </Col>
                </Row>
                <hr className="my-4" />
                <Row>
                    <Col className="text-center">
                        <p className="mb-0 text-light">
                            © {new Date().getFullYear()} ЭлектроМастер. Все права защищены.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;