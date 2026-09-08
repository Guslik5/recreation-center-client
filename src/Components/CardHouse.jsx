import React from 'react';
import { Badge, Button, Card } from "react-bootstrap";
import '../Css/customCard.css';

export const CardHouse = ({ title, capacity, price, description, image }) => {
    const handleBook = () => {
        const bannerElement = document.getElementById('formPhone');
        if (bannerElement) {
            bannerElement.scrollIntoView({ behavior: 'smooth' });
            bannerElement.focus();
        } else {
            window.location.href = "tel:+79119688269";
        }
    };

    return (
        <Card className="border-0 w-100 shadow-sm rounded-4 overflow-hidden">
            <div style={{ height: "220px", overflow: "hidden" }}>
                <Card.Img
                    variant="top"
                    src={image}
                    style={{ height: "100%", width: "100%", objectFit: "cover" }}
                    className="transition-transform"
                />
            </div>
            <Card.Body className="d-flex flex-column text-center p-4" style={{ backgroundColor: "#FAFAFA" }}>
                <div className="d-flex justify-content-center gap-2 mb-2 flex-wrap">
                    {capacity && (
                        <Badge bg="dark" className="px-2 py-1 fw-normal">
                            {capacity}
                        </Badge>
                    )}
                    <Badge bg="secondary" className="px-2 py-1 fw-normal">
                        Мини-бар включен
                    </Badge>
                </div>
                {title && <Card.Title className="fs-5 fw-bold mb-2">{title}</Card.Title>}
                <Card.Text className="custom-min-w text-muted small flex-grow-1 mb-3">
                    {description}
                </Card.Text>
                {price && (
                    <div className="mb-2">
                        <div className="fs-4 fw-bold" style={{ color: "#2e7d32" }}>{price}</div>
                        <div className="text-muted" style={{ fontSize: "0.8rem" }}>Цена указана за сутки</div>
                    </div>
                )}
                <div className="text-muted mb-3" style={{ fontSize: "0.75rem", lineHeight: "1.3" }}>
                    Доп. гость: +1 000 ₽/сут • Кроватка/стульчик: бесплатно
                </div>
                <Button
                    as="a"
                    href="tel:+79119688269"
                    variant="success"
                    className="custom-button-green w-100 rounded-3 text-white text-decoration-none"
                >
                    Забронировать
                </Button>
            </Card.Body>
        </Card>
    );
};