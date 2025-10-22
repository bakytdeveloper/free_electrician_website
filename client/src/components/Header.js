import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar
            expand="lg"
            fixed="top"
            className={`py-3 transition-all ${scrolled ? 'bg-white shadow' : 'bg-transparent'}`}
            variant={scrolled ? 'light' : 'dark'}
        >
            <Container>
                <Navbar.Brand href="#home" className="fw-bold fs-3">
                    ⚡ ЭлектроМастер
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className="mx-2 fw-semibold">Главная</Nav.Link>
                        <Nav.Link href="#services" className="mx-2 fw-semibold">Услуги</Nav.Link>
                        <Nav.Link href="#portfolio" className="mx-2 fw-semibold">Работы</Nav.Link>
                        <Nav.Link href="#order" className="mx-2 fw-semibold">Заказать</Nav.Link>
                    </Nav>

                    <a
                        href="tel:+79991234567"
                        className="btn btn-electric ms-lg-3 mt-2 mt-lg-0"
                    >
                        📞 Позвонить
                    </a>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;