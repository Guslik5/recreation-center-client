import React from 'react';
import { CardGroup, Container, Row, Col } from "react-bootstrap";
import houseWithSaunaImg from "../assets/new_images/photo_2026-09-06_06-40-40.jpg";
import houseJacuzziImg from "../assets/new_images/photo_2026-09-06_06-38-45.jpg";
import house3TerraceImg from "../assets/new_images/photo_2026-09-06_06-38-44.jpg";
import house2TerraceImg from "../assets/new_images/house3_terrace.jpg";
import { CardHouse } from "./CardHouse.jsx";

// Ссылка на Яндекс Диск с фотографиями домов
// Замените URL на вашу актуальную ссылку на папку Яндекс Диска при необходимости
const YANDEX_DISK_HOUSES_URL = "https://disk.yandex.ru/";

export const Houses = () => {
    const info = [
        {
            title: "Дом с сауной",
            capacity: "до 8 человек",
            price: "8 500 ₽",
            description: "Двухэтажный комфортный коттедж с собственной сауной – ваш идеальный уголок для релакса и восстановления сил. Комфорт, уют и целебный пар ждут вас!",
            img: houseWithSaunaImg,
        },
        {
            title: "Дом с джакузи",
            capacity: "до 5 человек",
            price: "6 500 ₽",
            description: "Стильный треугольный дом А-фрейм: современный комфорт, роскошное джакузи, близость к природе и незабываемый расслабляющий отдых.",
            img: houseJacuzziImg,
        },
        {
            title: "Дом с террасой и качелью",
            capacity: "до 4 человек",
            price: "6 500 ₽",
            description: "Просторный дом с большой террасой, подвесными качелями и персональной зоной мангала. Идеально для отдыха дружной семьи или компании.",
            img: house3TerraceImg,
        },
        {
            title: "Дом с террасой и качелью",
            capacity: "до 2 человек",
            price: "4 500 ₽",
            description: "Уютный романтический домик для двоих с большой террасой и качелями. Место, где время останавливается и слышна только природа.",
            img: house2TerraceImg,
        },
    ];

    return (
        <div id="houses-section" className="py-4">
            <div className="text-center mb-4 px-3">
                <h2 className="fs-1 fw-bold mb-2">Наши дома</h2>
                <p className="text-muted mx-auto mb-3" style={{ maxWidth: "720px" }}>
                    Цены указаны за сутки проживания. В каждом доме есть мини-бар, вся необходимая посуда и гигиенические принадлежности.
                </p>
                <div className="d-flex justify-content-center gap-2 flex-wrap mb-3">
                    <span className="badge bg-success py-2 px-3 fw-normal fs-6">
                        👶 Детские кроватки и стульчики — бесплатно
                    </span>
                    <span className="badge bg-light text-dark border py-2 px-3 fw-normal fs-6">
                        👥 Доплата за доп. гостя — 1 000 ₽ / сутки
                    </span>
                </div>
                <div>
                    <a
                        href={YANDEX_DISK_HOUSES_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-success rounded-pill px-3 py-1 shadow-sm d-inline-flex align-items-center gap-2 small"
                        style={{ fontSize: "0.9rem" }}
                    >
                        <span>📁</span>
                        <span>Больше фото домов тут (Яндекс Диск)</span>
                        <span>↗</span>
                    </a>
                </div>
            </div>
            <Container fluid className="px-lg-5 pb-5 border-bottom">
                <Row className="g-3 justify-content-center">
                    {info.map((value, idx) => (
                        <Col key={idx} xs={12} sm={6} lg={3} className="d-flex">
                            <CardHouse
                                title={value.title}
                                capacity={value.capacity}
                                price={value.price}
                                description={value.description}
                                image={value.img}
                            />
                        </Col>
                    ))}
                </Row>

                {/* Баннер со ссылкой на Яндекс Диск для подробного просмотра всех фото */}
                <div className="text-center mt-5">
                    <div
                        className="p-4 rounded-4 bg-white shadow-sm border d-inline-block text-start"
                        style={{ maxWidth: "680px", width: "100%" }}
                    >
                        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3">
                            <div className="d-flex align-items-center gap-3">
                                <div className="fs-1">📸</div>
                                <div>
                                    <div className="fw-bold fs-5 text-dark">Хотите больше фото домиков?</div>
                                    <div className="text-muted small">
                                        Посмотрите подробные альбомы всех комнат, интерьеров, террас и территории
                                    </div>
                                </div>
                            </div>
                            <a
                                href={YANDEX_DISK_HOUSES_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-success custom-button-green text-white px-4 py-2 rounded-pill fw-semibold text-nowrap shadow-sm d-inline-flex align-items-center gap-2"
                            >
                                <span>Больше фото домов тут</span>
                                <span style={{ fontSize: "1.1rem" }}>↗</span>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};