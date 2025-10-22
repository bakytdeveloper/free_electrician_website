import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

const Portfolio = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const portfolioItems = [
        {
            category: 'Квартиры',
            image: '/api/placeholder/400/300',
            title: 'Электромонтаж в 3-комнатной квартире',
            description: 'Полная замена электропроводки с установкой умного щитка'
        },
        {
            category: 'Дома',
            image: '/api/placeholder/400/300',
            title: 'Частный дом 150м²',
            description: 'Монтаж электрики с заземлением и системой защиты'
        },
        {
            category: 'Офисы',
            image: '/api/placeholder/400/300',
            title: 'Офисное помещение',
            description: 'Установка офисного освещения и розеточных групп'
        },
        {
            category: 'Освещение',
            image: '/api/placeholder/400/300',
            title: 'Дизайнерское освещение',
            description: 'Многоуровневая система освещения в гостиной'
        },
        {
            category: 'Щитки',
            image: '/api/placeholder/400/300',
            title: 'Электрощиток',
            description: 'Сборка и установка современного электрощита'
        },
        {
            category: 'Розетки',
            image: '/api/placeholder/400/300',
            title: 'Блок розеток',
            description: 'Установка стильных розеток с USB-портами'
        }
    ];

    const openModal = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    return (
        <>
            <section id="portfolio" className="py-5">
                <Container>
                    <Row className="text-center mb-5">
                        <Col>
                            <h2 className="display-4 fw-bold mb-3" data-aos="fade-up">
                                Наши работы
                            </h2>
                            <p className="lead text-muted" data-aos="fade-up" data-aos-delay="100">
                                Примеры выполненных электромонтажных работ
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        {portfolioItems.map((item, index) => (
                            <Col lg={4} md={6} className="mb-4" key={index}>
                                <div
                                    className="portfolio-item position-relative overflow-hidden rounded-3 shadow-sm"
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 100}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => openModal(item.image)}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="img-fluid w-100 transition-all"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    />
                                    <div className="portfolio-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-4 text-white">
                                        <div>
                                            <span className="badge bg-electric mb-2">{item.category}</span>
                                            <h5 className="mb-1">{item.title}</h5>
                                            <p className="mb-0 small">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
                <Modal.Body className="p-0">
                    <img src={selectedImage} alt="Увеличенное изображение" className="img-fluid w-100" />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Portfolio;