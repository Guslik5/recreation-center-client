import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import avitoIcon from "../assets/avitoIcon.png";
import whatsAppIcon from "../assets/whatsappIcon.png";
import tgIcon from "../assets/tgIcon.png";
import maxIcon from "../assets/maxIcon.svg";
import phoneIcon from "../assets/phone-icon.png";
import mapIcon from "../assets/map-icon.png";
import logoImg from "../assets/new_logo.png";
import "../Css/footer.css";

export const Footer = () => {
    const socialLinks = [
        {
            href: "https://www.avito.ru/brands/a52062511cb77b3f403f4cfba6d3a153/all?gdlkerfdnwq=101&shopId=6024799&page_from=from_item_card&iid=4455398072&sellerId=ab4e7fff2e4cb9ba2175940b2f685216",
            alt: "Авито",
            image: avitoIcon
        },
        {
            href: "https://t.me/domabane",
            alt: "Телеграм",
            image: tgIcon
        },
        {
            href: "https://max.ru/join/Tj5_-e8QQFPT1X9UyiTR2lHVtYC3knRRBrNJMtfRxR8",
            alt: "MAX",
            image: maxIcon
        },
        {
            href: "https://wa.me/79119688269",
            alt: "WhatsApp",
            image: whatsAppIcon
        }
    ];

    return (
        <footer className="custom-footer py-4">
            <Container fluid className="px-3 px-md-5">
                <Row className="gy-4 align-items-center justify-content-between text-center text-md-start">
                    {/* Brand & Logo */}
                    <Col xs={12} sm={6} md={3} className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
                        <img src={logoImg} alt="База отдыха БАРецкий" className="footer-logo flex-shrink-0" />
                        <div>
                            <div className="fw-bold text-white fs-5 lh-1 mb-1">БАРецкий</div>
                            <div className="text-white-50 small">База отдыха в лесу</div>
                        </div>
                    </Col>

                    {/* Social networks */}
                    <Col xs={12} sm={6} md={3} className="d-flex justify-content-center justify-content-md-start gap-2">
                        {socialLinks.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-btn"
                                title={item.alt}
                            >
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                                />
                            </a>
                        ))}
                    </Col>

                    {/* Phones */}
                    <Col xs={12} sm={6} md={3} className="d-flex flex-column align-items-center align-items-md-start gap-1">
                        <a className="footer-phone-link" href="tel:+79119688269">
                            <img src={phoneIcon} alt="phone" width="14" height="14" className="me-2 flex-shrink-0" />
                            <span>Бронь: <strong className="text-white">8 911 968 82 69</strong></span>
                        </a>
                        <a className="footer-phone-link" href="tel:+79117759163">
                            <img src={phoneIcon} alt="phone" width="14" height="14" className="me-2 flex-shrink-0" />
                            <span>Управл. Валерия: <strong className="text-white">8 911 775 91 63</strong></span>
                        </a>
                    </Col>

                    {/* Address & Copyright */}
                    <Col xs={12} sm={6} md={3} className="d-flex flex-column align-items-center align-items-md-end text-md-end">
                        <div className="d-flex align-items-center mb-1">
                            <img src={mapIcon} alt="map" width="16" height="16" className="me-2 flex-shrink-0" />
                            <span className="footer-address">
                                Лен. обл., дер. Петровщина, ул. Каштановая, 8
                            </span>
                        </div>
                        <div className="text-white-50" style={{ fontSize: "0.74rem" }}>
                            © {new Date().getFullYear()} База отдыха «БАРецкий». Все права защищены.
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};