import React from 'react';
import {Card, CardGroup, Col, Container, Row} from "react-bootstrap";
import image from "../assets/check-mark-icon.png"
import {CardAdvantages} from "./CardAdvantages.jsx";

export const Advantages = () => {
    const info = [
        {
            title: "40 минут от города",
            description: "Быстрый выезд по Мурманскому шоссе без загородных пробок.",
            icon: "🚗",
            badge: "Локация",
        },
        {
            title: "Новые дома 2024",
            description: "Свежие коттеджи из дерева со всеми удобствами и техникой.",
            icon: "🏡",
            badge: "Комфорт",
        },
        {
            title: "Продуманный досуг",
            description: "Баня, тир, кальян, питбайки, квадроциклы и мангал-олень.",
            icon: "🎯",
            badge: "Активности",
        },
        {
            title: "Батут и площадка",
            description: "Батут для прыжков и качели для безопасных игр на свежем воздухе.",
            icon: "🤸",
            badge: "Для детей",
        },
        {
            title: "Стульчики и кроватки",
            description: "Бесплатно предоставим детскую кроватку и стульчик для кормления.",
            icon: "👶",
            badge: "Бесплатно",
        },
        {
            title: "Помощь за 30 минут",
            description: "Любые форс-мажоры (свет, вода) оперативно устраняются за 30 мин.",
            icon: "⚡",
            badge: "Надежность",
        },
        {
            title: "Мини-бар в домике",
            description: "Напитки и лимонады под рукой в номере, когда магазины закрыты.",
            icon: "🍹",
            badge: "Сервис",
        },
        {
            title: "Богатые окрестности",
            description: "Палеопарк, парашюты, конюшня, эко-ферма, канал, река Лава.",
            icon: "🗺️",
            badge: "Окрестности",
        },
        {
            title: "Дистанционный заезд",
            description: "Заезд и выезд по видео, приватность и быстрый возврат залога.",
            icon: "📱",
            badge: "24/7",
        },
        {
            title: "100 ₽ за отзыв",
            description: "Гарантированный возврат 100 ₽ за честный отзыв об отдыхе!",
            icon: "🎁",
            badge: "Кэшбэк",
        },
    ];

    return (
        <section className="py-4 py-md-5" style={{ backgroundColor: "#ffffff" }}>
            <Container fluid="xl" className="border-bottom pb-5 px-3 px-xl-4">
                <div className="text-center mb-4">
                    <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-3 py-2 rounded-pill mb-2 fw-semibold" style={{ fontSize: "0.8rem" }}>
                        Наши преимущества
                    </span>
                    <h2 className="fs-2 fw-bold mb-1">Почему именно мы?</h2>
                    <p className="text-muted mx-auto small mb-0" style={{ maxWidth: "600px" }}>
                        10 причин выбрать загородный отдых на базе «БАРецкий»
                    </p>
                </div>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-2 g-xl-3 justify-content-center">
                    {info.map((value, idx) => (
                        <Col key={idx} className="d-flex">
                            <CardAdvantages
                                title={value.title}
                                description={value.description}
                                icon={value.icon}
                                badge={value.badge}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};