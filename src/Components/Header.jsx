import React, { useState } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import phoneIcon from '../assets/phone-icon.png';
import mapIcon from '../assets/map-icon.png';
import logoImg from '../assets/new_logo.png';
import "../Css/header.css";

export default function Header() {
    const [expanded, setExpanded] = useState(false);

    const handleNavClick = (id) => {
        setExpanded(false);
        if (id) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleBookingClick = () => {
        setExpanded(false);
        const bannerElement = document.getElementById('formPhone');
        if (bannerElement) {
            bannerElement.scrollIntoView({ behavior: 'smooth' });
            bannerElement.focus();
        } else {
            window.location.href = "tel:+79119688269";
        }
    };

    return (
        <Navbar
            expanded={expanded}
            onToggle={setExpanded}
            expand="lg"
            sticky="top"
            className="custom-navbar py-2"
        >
            <Container fluid className="px-2 px-sm-3 px-xl-4">
                {/* Brand Logo */}
                <Navbar.Brand
                    className="p-0 me-2 d-flex align-items-center"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleNavClick()}
                >
                    <img src={logoImg} alt="База отдыха БАРецкий" className="header-logo" />
                    <div className="d-flex flex-column ms-2">
                        <span className="fw-bold text-white fs-6 lh-1" style={{ letterSpacing: "0.5px" }}>БАРецкий</span>
                        <span className="text-white-50" style={{ fontSize: "0.68rem" }}>база отдыха</span>
                    </div>
                </Navbar.Brand>

                {/* Quick Call Button on Mobile */}
                <div className="d-flex d-lg-none align-items-center gap-2 ms-auto me-2">
                    <a
                        href="tel:+79119688269"
                        className="d-flex align-items-center gap-1 text-white text-decoration-none px-2 py-1 rounded-pill"
                        style={{
                            fontSize: "0.75rem",
                            backgroundColor: "rgba(40, 167, 69, 0.25)",
                            border: "1px solid rgba(40, 167, 69, 0.55)",
                            whiteSpace: "nowrap"
                        }}
                    >
                        <img src={phoneIcon} alt="phone" width="12" height="12" />
                        <span>8 911 968 82 69</span>
                    </a>
                </div>

                {/* Hamburger Toggle */}
                <Navbar.Toggle
                    aria-controls="main-navbar-nav"
                    className="header-toggler border-0 shadow-none"
                />

                {/* Nav & Contact Links */}
                <Navbar.Collapse id="main-navbar-nav" className="mobile-collapse-wrapper">
                    {/* Navigation Items */}
                    <Nav className="mx-auto align-items-stretch align-items-lg-center gap-1 my-2 my-lg-0">
                        <button
                            type="button"
                            className="header-nav-btn"
                            onClick={() => handleNavClick()}
                        >
                            Главная
                        </button>
                        <button
                            type="button"
                            className="header-nav-btn"
                            onClick={() => handleNavClick('houses-section')}
                        >
                            Дома
                        </button>
                        <button
                            type="button"
                            className="header-nav-btn text-nowrap"
                            onClick={() => handleNavClick('prices-section')}
                        >
                            Цены и услуги
                        </button>
                        <button
                            type="button"
                            className="header-nav-btn"
                            onClick={() => handleNavClick('bathhouse-section')}
                        >
                            Баня
                        </button>
                        <button
                            type="button"
                            className="header-nav-btn"
                            onClick={() => handleNavClick('reviews-section')}
                        >
                            Отзывы
                        </button>
                        <button
                            type="button"
                            className="header-nav-btn"
                            onClick={() => handleNavClick('location-section')}
                        >
                            Контакты
                        </button>
                    </Nav>

                    {/* Contact info and CTA */}
                    <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-2 pt-2 pt-lg-0">
                        {/* Phone numbers */}
                        <div className="d-flex flex-column flex-sm-row flex-lg-column flex-xl-row gap-1 gap-xl-2">
                            <a
                                className="header-phone-link"
                                href="tel:+79119688269"
                                title="Администратор по бронированию"
                            >
                                <img src={phoneIcon} alt="phone" width="13" height="13" className="me-1" />
                                <span>Бронь: <strong className="text-white">8 911 968 82 69</strong></span>
                            </a>
                            <a
                                className="header-phone-link"
                                href="tel:+79117759163"
                                title="Управляющая Валерия"
                            >
                                <img src={phoneIcon} alt="phone" width="13" height="13" className="me-1" />
                                <span>Управл. Валерия: <strong className="text-white">8 911 775 91 63</strong></span>
                            </a>
                        </div>

                        {/* Location address in mobile collapse */}
                        <div className="d-flex d-lg-none align-items-center gap-2 px-2 py-1 my-1 text-white-50" style={{ fontSize: "0.78rem" }}>
                            <img src={mapIcon} alt="map" width="14" height="14" />
                            <span>Лен. обл., дер. Петровщина, ул. Каштановая, 8</span>
                        </div>

                        {/* Booking CTA Button */}
                        <a
                            href="tel:+79119688269"
                            className="header-cta-btn w-100 w-lg-auto text-center text-decoration-none"
                            onClick={() => setExpanded(false)}
                        >
                            Забронировать
                        </a>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}