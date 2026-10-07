import React from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Css/customCard.css";

export const CardHouse = ({
  slug,
  title,
  capacity,
  price,
  description,
  image,
  badge,
  badgeColor,
  onOpenBooking,
}) => {
  return (
    <Card className="border-0 w-100 shadow-sm rounded-4 overflow-hidden d-flex flex-column h-100 bg-white">
      <div style={{ height: "230px", overflow: "hidden", position: "relative" }}>
        <Link to={`/houses/${slug}`}>
          <Card.Img
            variant="top"
            src={image}
            alt={title}
            style={{ height: "100%", width: "100%", objectFit: "cover", transition: "transform 0.3s ease" }}
            className="card-house-img"
          />
        </Link>
        {badge && (
          <Badge
            bg={badgeColor || "success"}
            className="position-absolute top-0 start-0 m-3 px-3 py-2 fw-normal shadow-sm rounded-pill"
          >
            {badge}
          </Badge>
        )}
      </div>

      <Card.Body className="d-flex flex-column text-center p-4 flex-grow-1" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="d-flex justify-content-center gap-2 mb-2 flex-wrap">
          {capacity && (
            <Badge bg="dark" className="px-2 py-1 fw-normal">
              {capacity}
            </Badge>
          )}
          <Badge bg="secondary" className="px-2 py-1 fw-normal" title="Мини-бар присутствует в доме (не включен в стоимость)">
            Мини-бар (не вкл. в стоимость)
          </Badge>
        </div>

        {title && (
          <Card.Title className="fs-5 fw-bold mb-2 text-dark">
            <Link to={`/houses/${slug}`} className="text-dark text-decoration-none hover-underline">
              {title}
            </Link>
          </Card.Title>
        )}

        <Card.Text className="custom-min-w text-muted small flex-grow-1 mb-3">
          {description}
        </Card.Text>

        {price && (
          <div className="mb-2">
            <div className="fs-4 fw-bold" style={{ color: "#2e7d32" }}>
              {price}
            </div>
            <div className="text-muted" style={{ fontSize: "0.8rem" }}>
              Цена указана за сутки
            </div>
          </div>
        )}

        <div className="text-muted mb-3" style={{ fontSize: "0.75rem", lineHeight: "1.3" }}>
          Доп. гость: +1 000 ₽/сут • Кроватка/стульчик: бесплатно
        </div>

        {/* Две кнопки: "Подробнее о домике" и "Забронировать" */}
        <div className="d-flex flex-column gap-2 mt-auto">
          <Link
            to={`/houses/${slug}`}
            className="btn btn-outline-success w-100 rounded-3 py-2 fw-semibold text-decoration-none small"
          >
            Подробнее о домике →
          </Link>

          <Button
            variant="success"
            className="custom-button-green w-100 rounded-3 py-2 text-white fw-semibold"
            onClick={() => onOpenBooking && onOpenBooking(slug)}
          >
            Забронировать
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};