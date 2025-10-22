import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {
    return (
        <section id="home" className="gradient-bg text-white hero-section">
            <Container>
                <Row className="align-items-center gy-5">
                    <Col lg={6} className="pe-lg-5" data-aos="fade-right">
                        <h1 className="hero-title mb-4">
                            Профессиональные
                            <span className="text-warning"> электромонтажные</span>
                            {' '}работы
                        </h1>

                        <p className="lead mb-4 fs-5">
                            Качественные услуги электрика с гарантией. Быстрое решение любых проблем с электропроводкой.
                            Работаем 24/7 для вашего комфорта.
                        </p>

                        <div className="d-flex flex-wrap gap-3 mb-4">
                            <a href="#order" className="btn btn-electric btn-lg">🚀 Вызвать электрика</a>
                            <a href="#services" className="btn btn-outline-light btn-lg">📋 Наши услуги</a>
                        </div>

                        <div className="d-flex gap-3 stats-row">
                            <div className="text-center">
                                <div className="h3 fw-bold">500+</div>
                                <div className="text-light">Выполненных работ</div>
                            </div>
                            <div className="text-center">
                                <div className="h3 fw-bold">5 лет</div>
                                <div className="text-light">Опыта работы</div>
                            </div>
                            <div className="text-center">
                                <div className="h3 fw-bold">24/7</div>
                                <div className="text-light">Доступность</div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} className="ps-lg-5" data-aos="fade-left" data-aos-delay="300">
                        <div className="hero-image-wrap position-relative mx-auto">
                            <img
                                src="https://img.freepik.com/free-photo/electrician-man-overalls-works-switchboard-portrait-electrician-overalls_169016-66836.jpg?uid=R92488734&ga=GA1.1.293432331.1759575245&w=740&q=80"
                                // srcSet="https://picsum.photos/900/600 1.5x, https://picsum.photos/1200/800 2x"
                                alt="Электрик за работой"
                                className="img-fluid hero-img rounded-3 shadow-lg"
                                width="600"
                                height="400"
                                loading="lazy"
                            />

                            <div className="position-absolute top-0 start-0 m-3">
                                <a className="hero-green-button bg-success text-white p-3 rounded-3 shadow d-inline-block" href="#order">
                                    <div className="h6 mb-0">🚀 Срочный выезд</div>
                                    <small>30-60 минут</small>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
