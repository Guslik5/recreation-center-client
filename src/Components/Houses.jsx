import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { housesData } from "../data/housesData";
import { CardHouse } from "./CardHouse.jsx";

export const Houses = ({ onOpenBooking }) => {
  return (
    <div id="houses-section" className="py-4">
      <div className="text-center mb-4 px-3">
        <h2 className="fs-1 fw-bold mb-2">Наши дома</h2>
        <p className="text-muted mx-auto mb-3" style={{ maxWidth: "720px" }}>
          Цены указаны за сутки проживания. В каждом доме присутствует мини-бар (не включен в стоимость), вся необходимая посуда и гигиенические принадлежности.
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
      </Container>
    </div>
  );
};