import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import photoPanorama from "../assets/new_images/photo_2026-09-06_06-38-50.jpg"
import photoFacade from "../assets/new_images/photo_2026-09-06_06-38-46.jpg"
import photoGnome from "../assets/new_images/photo_2026-09-06_06-38-49.jpg"
import photoInterior from "../assets/Bathhouse/photo4.jpg"

export const Bathhouse = () => {
    const largeImage = {
        src: photoPanorama,
        alt: 'Панорама бани на дровах',
    };

    const smallImages = [
        {
            src: photoFacade,
            alt: 'Фасад бани с вывеской',
        },
        {
            src: photoGnome,
            alt: 'Фигурка Идите в баню',
        },
        {
            src: photoInterior,
            alt: 'Интерьер парной',
        },
    ];

    const smallImageStyle = {
        marginBottom: '5px',
        padding: "6px"
    };

    const bigImageStyle = {
        padding: "6px"
    }


    return (
        <Container id="bathhouse-section" className="border-bottom px-3 px-md-4">
            <Row className="my-5 mx-0 g-4">
                <Col md={8}>
                    <Row>
                        <Col md={12} xs={12} style={bigImageStyle}>
                            <img
                                src={largeImage.src}
                                alt={largeImage.alt}
                                className="img-fluid rounded-4 shadow-sm"
                                style={{ width: '100%', height: '360px', objectFit: 'cover' }}
                            />
                        </Col>
                    </Row>

                    <Row>
                        {smallImages.map((image, index) => (
                            <Col key={index} md={4} xs={4} style={smallImageStyle}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="img-fluid rounded-3 shadow-sm"
                                    style={{ width: '100%', height: '140px', objectFit: 'cover' }}
                                />
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col md={4} className="d-flex flex-column justify-content-center" style={{backgroundColor: "#FAFAFA", padding: "30px", borderRadius: "30px"}}>
                    <div className="d-flex flex-wrap gap-2 mb-2">
                        <span className="badge bg-success fs-6 fw-normal px-3 py-2">4 500 ₽ / сеанс (4–5 часов)</span>
                        <span className="badge bg-light text-dark border px-2 py-2">👥 До 6 человек</span>
                        <span className="badge bg-light text-success border px-2 py-2">🧖 Шапка и полотенца — бесплатно!</span>
                    </div>
                    <h3 className="fw-bold">
                        Баня на 6 человек на дровах 🪵
                    </h3>
                    <p className="text-muted mt-2 small">
                        Погрузитесь в мир тепла и уюта! Настоящая русская парная на дровах с мягким паром,
                        время парения — 4–5 часов. Банные шапки и чистые полотенца уже включены в стоимость.
                    </p>

                    <div className="mt-3 p-3 rounded-4 bg-white shadow-sm border">
                        <div className="fw-bold text-dark mb-2 small text-uppercase" style={{ letterSpacing: "0.5px" }}>
                            🌿 В продаже для бани и мангала:
                        </div>
                        <ul className="list-unstyled mb-0 small text-muted">
                            <li className="d-flex justify-content-between py-1 border-bottom">
                                <span>Дубовый веник</span>
                                <strong className="text-dark">800 ₽</strong>
                            </li>
                            <li className="d-flex justify-content-between py-1 border-bottom">
                                <span>Березовый веник</span>
                                <strong className="text-dark">700 ₽</strong>
                            </li>
                            <li className="d-flex justify-content-between py-1 border-bottom">
                                <span>Арома-масла (бутылочка)</span>
                                <strong className="text-dark">350 ₽</strong>
                            </li>
                            <li className="d-flex justify-content-between py-1 border-bottom">
                                <span>Дрова для мангала (7 шт.)</span>
                                <strong className="text-dark">300 ₽</strong>
                            </li>
                            <li className="d-flex justify-content-between py-1 border-bottom">
                                <span>Древесный уголь</span>
                                <strong className="text-dark">350 ₽</strong>
                            </li>
                            <li className="d-flex justify-content-between py-1">
                                <span>Розжиг (0.5 л)</span>
                                <strong className="text-dark">300 ₽</strong>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}