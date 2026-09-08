import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import photoSign from "../assets/new_images/photo_2026-09-06_06-40-23.jpg";
import photoTerritory from "../assets/new_images/photo_2026-09-06_06-39-07.jpg";
import photoPlayground from "../assets/new_images/photo_2026-09-06_06-39-41.jpg";
import photoPorch from "../assets/new_images/photo_2026-09-06_06-38-58.jpg";
import photoWelcome from "../assets/new_images/photo_2026-09-06_06-39-21.jpg";
import photoSup from "../assets/new_images/photo_2026-09-06_06-40-47.jpg";

export const PhotoCollage = () => {
    const photos = [
        { src: photoSign, alt: "Въезд на базу отдыха Барецкий" },
        { src: photoTerritory, alt: "Территория базы и коттеджи" },
        { src: photoPlayground, alt: "Детская площадка и качели" },
        { src: photoPorch, alt: "Домик с подвесными качелями" },
        { src: photoWelcome, alt: "Добро пожаловать" },
        { src: photoSup, alt: "Сапборд и водный отдых" },
    ];

    return (
        <>
            <Container className="my-5">
                <Row className="g-3">
                    {photos.map((item, i) => (
                        <Col key={i} xs={12} sm={6} md={4}>
                            <div className="overflow-hidden rounded-4 shadow-sm" style={{ height: "240px" }}>
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    className="transition-transform"
                                />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
            <div className="d-flex justify-content-center fs-5 mb-5 px-3">
                <span className="text-center text-muted" style={{ maxWidth: "680px" }}>
                    Ваш идеальный отдых начинается здесь: почувствуйте гармонию с природой, чистый воздух и уют на базе «БАРецкий».
                </span>
            </div>
        </>
    );
};