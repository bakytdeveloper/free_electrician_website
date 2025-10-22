import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
    const services = [
        {
            icon: '🏠',
            title: 'Электромонтаж в квартирах',
            description: 'Полный комплекс работ по монтажу электропроводки в новостройках и вторичном жилье'
        },
        {
            icon: '🏢',
            title: 'Электромонтаж в домах',
            description: 'Проектирование и монтаж электрических систем в частных домах и коттеджах'
        },
        {
            icon: '🔌',
            title: 'Установка розеток и выключателей',
            description: 'Монтаж, замена и перенос розеток, выключателей, диммеров'
        },
        {
            icon: '💡',
            title: 'Освещение и люстры',
            description: 'Установка и подключение светильников, люстр, бра, точечных светильников'
        },
        {
            icon: '⚠️',
            title: 'Аварийные работы',
            description: 'Срочное устранение неисправностей: нет света, искрит розетка, срабатывает УЗО'
        },
        {
            icon: '📊',
            title: 'Электролаборатория',
            description: 'Диагностика электропроводки, замеры сопротивления, проверка заземления'
        }
    ];

    return (
        <section id="services" className="py-5 bg-light">
            <Container>
                <Row className="text-center mb-5">
                    <Col>
                        <h2 className="display-4 fw-bold mb-3" data-aos="fade-up">
                            Наши услуги
                        </h2>
                        <p className="lead text-muted" data-aos="fade-up" data-aos-delay="100">
                            Широкий спектр электромонтажных работ любой сложности
                        </p>
                    </Col>
                </Row>

                <Row>
                    {services.map((service, index) => (
                        <Col lg={4} md={6} className="mb-4" key={index}>
                            <Card
                                className="service-card h-100 border-0"
                                data-aos="flip-up"
                                data-aos-delay={index * 100}
                            >
                                <Card.Body className="p-4 text-center">
                                    <div className="service-icon">
                                        {service.icon}
                                    </div>
                                    <Card.Title className="h5 fw-bold mb-3">
                                        {service.title}
                                    </Card.Title>
                                    <Card.Text className="text-muted">
                                        {service.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Services;