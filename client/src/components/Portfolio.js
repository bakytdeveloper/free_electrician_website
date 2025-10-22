import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

const Portfolio = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const portfolioItems = [
        {
            category: 'Квартиры',
            image: 'https://img.freepik.com/free-photo/electrician-installing-electricity_1398-413.jpg?uid=R92488734&ga=GA1.1.293432331.1759575245&w=740&q=80',
            title: 'Электромонтаж в 3-комнатной квартире',
            description: 'Полная замена электропроводки с установкой умного щитка'
        },
        {
            category: 'Дома',
            image: 'https://img.freepik.com/free-photo/electrician-builder-work-examines-cable-connection-electrical-line-fuselage-industrial-switchboard-professional-overalls-with-electrician-s-tool_169016-7334.jpg?uid=R92488734&ga=GA1.1.293432331.1759575245&w=740&q=80',
            title: 'Частный дом 150м²',
            description: 'Монтаж электрики с заземлением и системой защиты'
        },
        {
            category: 'Офисы',
            image: 'https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-24586.jpg?uid=R92488734&ga=GA1.1.293432331.1759575245&w=740&q=80',
            title: 'Офисное помещение',
            description: 'Установка офисного освещения и розеточных групп'
        },
        {
            category: 'Освещение',
            image: 'https://img.freepik.com/premium-photo/home-ceiling-light-equipment-maintenance_1016675-759.jpg?uid=R92488734&ga=GA1.1.293432331.1759575245&w=740&q=80',
            title: 'Дизайнерское освещение',
            description: 'Многоуровневая система освещения в гостиной'
        },
        {
            category: 'Щитки',
            image: 'https://img.freepik.com/free-photo/electrician-inspects-switchboard-wiring-check-screwdriver-hand_169016-68211.jpg?uid=R92488734&ga=GA1.1.293432331.1759575245&w=740&q=80',
            title: 'Электрощиток',
            description: 'Сборка и установка современного электрощита'
        },
        {
            category: 'Розетки',
            image: 'https://img.freepik.com/premium-photo/electrician-attaching-wires-socket-new-building-closeup_392895-505927.jpg?uid=R92488734&ga=GA1.1.293432331.1759575245&w=740&q=80',
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