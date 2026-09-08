import React from 'react';
import { CardGroup, Container, Row, Col } from "react-bootstrap";
import houseWithSaunaImg from "../assets/new_images/photo_2026-09-06_06-40-40.jpg";
import houseJacuzziImg from "../assets/new_images/photo_2026-09-06_06-38-45.jpg";
import house4TerraceImg from "../assets/new_images/photo_2026-09-06_06-39-11.jpg";
import house2TerraceImg from "../assets/new_images/photo_2026-09-06_06-38-44.jpg";
import { CardHouse } from "./CardHouse.jsx";

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
            img: house4TerraceImg,
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
                <div className="d-flex justify-content-center gap-2 flex-wrap mb-2">
                    <span className="badge bg-success py-2 px-3 fw-normal fs-6">
                        👶 Детские кроватки и стульчики — бесплатно
                    </span>
                    <span className="badge bg-light text-dark border py-2 px-3 fw-normal fs-6">
                        👥 Доплата за доп. гостя — 1 000 ₽ / сутки
                    </span>
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
            </Container>
        </div>
    );
};