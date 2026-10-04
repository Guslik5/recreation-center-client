import React, { useState } from 'react';
import { Container, Row, Col, Badge } from "react-bootstrap";
import {
  MapPin,
  Navigation,
  Car,
  Clock,
  Phone,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Compass
} from "lucide-react";

export const Location = () => {
  const [copied, setCopied] = useState(false);
  const [copiedCoords, setCopiedCoords] = useState(false);

  const addressText = "Ленинградская обл., дер. Петровщина, ул. Каштановая, 8";
  const coordsText = "59.875343, 31.499870";

  const handleCopyAddress = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(addressText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleCopyCoords = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(coordsText);
      setCopiedCoords(true);
      setTimeout(() => setCopiedCoords(false), 2500);
    }
  };

  return (
    <section id="location-section" className="py-5" style={{ backgroundColor: "#F9FAFB" }}>
      <Container className="px-3 px-md-4">
        {/* Заголовок секции */}
        <div className="text-center mb-5">
          <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-3 py-2 rounded-pill mb-2 fw-semibold fs-6 d-inline-flex align-items-center gap-1">
            <Compass size={16} />
            <span>Локация и маршрут</span>
          </span>
          <h2 className="fs-1 fw-bold text-dark mb-2">Как добраться до базы «БАРецкий»</h2>
          <p className="text-muted mx-auto mb-0" style={{ maxWidth: "680px", fontSize: "0.98rem" }}>
            Уединенный уголок тишины в сосновом бору — всего <strong>45–50 минут</strong> от Санкт-Петербурга по удобной свободной трассе без пробок.
          </p>
        </div>

        {/* Основной контент: Карточка маршрута + Интерактивная карта */}
        <Row className="g-4 align-items-stretch mb-4">
          {/* Левая колонка: Карточка адреса и навигаторов */}
          <Col lg={5} className="d-flex">
            <div className="p-4 p-md-5 bg-white rounded-4 shadow-sm border w-100 d-flex flex-column justify-content-between">
              <div>
                {/* Адрес с копированием */}
                <div className="p-3 rounded-4 bg-light border mb-4">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="badge bg-success bg-opacity-10 text-success fw-semibold small">
                      📍 Точный адрес базы
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="btn btn-sm btn-white bg-white border text-muted shadow-sm rounded-pill px-2 py-1 small d-inline-flex align-items-center gap-1"
                      title="Скопировать адрес"
                    >
                      {copied ? (
                        <>
                          <Check size={13} className="text-success" />
                          <span className="text-success small fw-semibold">Скопировано!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span className="small">Копировать</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="fw-bold text-dark fs-6 mb-1">
                    {addressText}
                  </div>
                  <div className="text-muted small" style={{ fontSize: "0.78rem" }}>
                    Асфальтированный подъезд прямо к воротам базы
                  </div>
                </div>

                {/* Координаты GPS */}
                <div className="d-flex align-items-center justify-content-between p-2 px-3 rounded-3 bg-light border mb-4 small text-muted">
                  <div className="d-flex align-items-center gap-2">
                    <Navigation size={15} className="text-success" />
                    <span>GPS: <strong>{coordsText}</strong></span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyCoords}
                    className="btn btn-link p-0 text-success text-decoration-none small"
                  >
                    {copiedCoords ? "✓ Скопировано" : "Копировать GPS"}
                  </button>
                </div>

                {/* Время в пути и ориентиры */}
                <div className="d-flex flex-column gap-3 mb-4">
                  <div className="d-flex align-items-start gap-3">
                    <div className="p-2 rounded-3 bg-light text-success flex-shrink-0 mt-1">
                      <Car size={18} />
                    </div>
                    <div>
                      <div className="fw-bold text-dark small">На автомобиле: 45–50 минут</div>
                      <div className="text-muted" style={{ fontSize: "0.82rem", lineHeight: "1.4" }}>
                        По Мурманскому шоссе (трасса Р-21 «Кола») до поворота на д. Петровщина. Бесплатная охраняемая парковка на территории.
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div className="p-2 rounded-3 bg-light text-success flex-shrink-0 mt-1">
                      <Clock size={18} />
                    </div>
                    <div>
                      <div className="fw-bold text-dark small">Бесконтактное заселение 24/7</div>
                      <div className="text-muted" style={{ fontSize: "0.82rem", lineHeight: "1.4" }}>
                        Заезд с 15:00, выезд до 12:00. Подробная видеоинструкция отправляется перед приездом — заезжайте в любое удобное время без ожидания.
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div className="p-2 rounded-3 bg-light text-success flex-shrink-0 mt-1">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="fw-bold text-dark small">Связь с администратором в пути</div>
                      <div className="text-muted" style={{ fontSize: "0.82rem", lineHeight: "1.4" }}>
                        Встретим, сориентируем по маршруту и ответим на любые вопросы:{" "}
                        <a href="tel:+79119688269" className="text-success fw-bold text-decoration-none">
                          8 911 968 82 69
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Кнопки открыть в популярных навигаторах */}
              <div className="pt-3 border-top">
                <div className="fw-semibold text-dark small mb-2">Открыть маршрут в навигаторе:</div>
                <div className="d-flex flex-wrap gap-2">
                  <a
                    href="https://yandex.ru/maps/?rtext=~59.875343,31.499870&rtt=auto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-warning btn-sm rounded-pill px-3 py-2 fw-semibold d-inline-flex align-items-center gap-1 text-dark shadow-sm"
                    style={{ backgroundColor: "#fc3f1d", color: "#fff", borderColor: "#fc3f1d" }}
                  >
                    <span>Яндекс.Карты</span>
                    <ExternalLink size={13} />
                  </a>

                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=59.875343,31.499870"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary btn-sm rounded-pill px-3 py-2 fw-semibold d-inline-flex align-items-center gap-1 bg-white shadow-sm"
                  >
                    <span>Google Maps</span>
                    <ExternalLink size={13} />
                  </a>

                  <a
                    href="https://2gis.ru/spb/geo/59.875343,31.499870"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-success btn-sm rounded-pill px-3 py-2 fw-semibold d-inline-flex align-items-center gap-1 bg-white shadow-sm"
                  >
                    <span>2ГИС</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          </Col>

          {/* Правая колонка: Карта в рамке */}
          <Col lg={7} className="d-flex">
            <div className="position-relative w-100 rounded-4 overflow-hidden shadow-sm border bg-white d-flex flex-column" style={{ minHeight: "480px" }}>
              {/* Плашка над картой */}
              <div className="position-absolute top-0 start-0 m-3 z-2">
                <div className="p-2 px-3 rounded-pill bg-white shadow-md border d-inline-flex align-items-center gap-2 small">
                  <span className="p-1 rounded-circle bg-success text-white d-flex">
                    <MapPin size={14} />
                  </span>
                  <span className="fw-bold text-dark">База отдыха «БАРецкий»</span>
                  <Badge bg="success" className="fw-normal">Работаем ежедневно</Badge>
                </div>
              </div>

              {/* Интерактивная карта Google Maps */}
              <iframe
                title="Карта базы отдыха БАРецкий"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2002.4220096025545!2d31.497291077395015!3d59.875342974883296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTnCsDUyJzMxLjIiTiAzMcKwMjknNTkuNSJF!5e0!3m2!1sru!2sru!4v1747987102626!5m2!1sru!2sru"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  minHeight: "480px",
                  flexGrow: 1,
                  display: "block",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Col>
        </Row>

        {/* Мини-блок: Что находится поблизости от базы */}
        <div className="p-4 rounded-4 bg-white border shadow-sm">
          <div className="d-flex align-items-center gap-2 mb-3">
            <Sparkles size={20} className="text-success" />
            <h3 className="fs-6 fw-bold text-dark mb-0 text-uppercase" style={{ letterSpacing: "0.5px" }}>
              Что посмотреть рядом во время загородного отдыха:
            </h3>
          </div>
          <Row className="g-3 small text-muted">
            <Col sm={6} md={3}>
              <div className="p-3 rounded-3 bg-light border h-100">
                <div className="fw-bold text-dark mb-1">🦖 Палеопарк (5 минут)</div>
                <div style={{ fontSize: "0.8rem", lineHeight: "1.4" }}>
                  Уникальные раскопки древнейших трилобитов и геологические экскурсии.
                </div>
              </div>
            </Col>
            <Col sm={6} md={3}>
              <div className="p-3 rounded-3 bg-light border h-100">
                <div className="fw-bold text-dark mb-1">🌊 Каньон реки Лава (8 минут)</div>
                <div style={{ fontSize: "0.8rem", lineHeight: "1.4" }}>
                  Живописные скалы, водопады и реликтовая природа для красивых прогулок.
                </div>
              </div>
            </Col>
            <Col sm={6} md={3}>
              <div className="p-3 rounded-3 bg-light border h-100">
                <div className="fw-bold text-dark mb-1">🐴 Конные прогулки (10 минут)</div>
                <div style={{ fontSize: "0.8rem", lineHeight: "1.4" }}>
                  Местная конюшня: романтические и семейные конные прогулки по лесу.
                </div>
              </div>
            </Col>
            <Col sm={6} md={3}>
              <div className="p-3 rounded-3 bg-light border h-100">
                <div className="fw-bold text-dark mb-1">⛵️ Ладожский канал (12 минут)</div>
                <div style={{ fontSize: "0.8rem", lineHeight: "1.4" }}>
                  Исторические каналы Петра I, рыбалка и виды на просторы Ладоги.
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};