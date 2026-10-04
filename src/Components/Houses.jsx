import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { housesData, YANDEX_DISK_HOUSES_URL } from "../data/housesData";
import { CardHouse } from "./CardHouse.jsx";

export const Houses = ({ onOpenBooking }) => {
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
        <Row className="g-4 justify-content-center">
          {housesData.map((house) => (
            <Col key={house.id} xs={12} sm={6} lg={3} className="d-flex">
              <CardHouse
                slug={house.slug}
                title={house.title}
                capacity={house.capacity}
                price={house.price}
                description={house.shortDescription}
                image={house.images[0]?.src}
                badge={house.badge}
                badgeColor={house.badgeColor}
                onOpenBooking={onOpenBooking}
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