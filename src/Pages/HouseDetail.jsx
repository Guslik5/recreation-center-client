import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Badge, Button, Card, Breadcrumb, Modal } from "react-bootstrap";
import { getHouseBySlug, housesData } from "../data/housesData";
import {
  Users,
  BedDouble,
  Maximize2,
  Clock,
  Sparkles,
  Phone,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Flame,
  Utensils,
  Wine,
  Tv,
  ShowerHead,
  Wind,
  Baby,
  Car,
  Bath,
  Heart,
  Sun,
  X,
  AlertCircle,
  Video,
  Play
} from "lucide-react";

// Карта иконок удобств
const iconMap = {
  Flame,
  Utensils,
  Wine,
  Tv,
  ShowerHead,
  Sparkles,
  Wind,
  Baby,
  BedDouble,
  Car,
  Bath,
  Heart,
  Sun,
};

export const HouseDetail = ({ onOpenBooking }) => {
  const { houseSlug } = useParams();
  const navigate = useNavigate();
  const house = getHouseBySlug(houseSlug);

  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!house) {
    return (
      <Container className="py-5 text-center my-5" style={{ minHeight: "60vh" }}>
        <div className="p-5 bg-white rounded-4 shadow-sm border d-inline-block" style={{ maxWidth: "560px" }}>
          <AlertCircle size={64} className="text-warning mb-3" />
          <h2 className="fw-bold mb-3">Домик не найден</h2>
          <p className="text-muted mb-4">
            К сожалению, запрошенный дом не существует или был перемещен. Вы можете выбрать любой из наших уютных домов на главной странице.
          </p>
          <Link to="/#houses-section" className="btn btn-success custom-button-green px-4 py-2 rounded-pill text-white text-decoration-none">
            ← Вернуться к каталогу домов
          </Link>
        </div>
      </Container>
    );
  }

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleNextLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % house.images.length);
  };

  const handlePrevLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + house.images.length) % house.images.length);
  };

  // Другие дома для блока рекомендаций
  const otherHouses = housesData.filter((h) => h.id !== house.id);

  return (
    <div className="py-4" style={{ backgroundColor: "#F9FAFB" }}>
      <Container>
        {/* Хлебные крошки */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Главная
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/#houses-section" }}>
              Дома
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{house.title}</Breadcrumb.Item>
          </Breadcrumb>

          <Link
            to="/#houses-section"
            className="btn btn-outline-secondary btn-sm rounded-pill px-3 d-inline-flex align-items-center gap-1"
          >
            <ArrowLeft size={14} />
            <span>Все дома</span>
          </Link>
        </div>

        {/* Заголовок страницы */}
        <div className="mb-4">
          <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
            <Badge bg={house.badgeColor || "success"} className="px-3 py-2 fs-6 fw-normal rounded-pill">
              {house.badge}
            </Badge>
            <span className="badge bg-white text-dark border px-3 py-2 fs-6 fw-normal rounded-pill shadow-sm">
              👥 {house.capacity}
            </span>
            <span className="badge bg-white text-dark border px-3 py-2 fs-6 fw-normal rounded-pill shadow-sm">
              📐 {house.area}
            </span>
          </div>
          <h1 className="fw-bold fs-2 text-dark mb-1">{house.fullTitle}</h1>
          <p className="text-muted">{house.shortDescription}</p>
        </div>

        {/* Галерея фотографий и Главный блок заказа */}
        <Row className="g-4 mb-5">
          {/* Левая колонка: Галерея */}
          <Col lg={7}>
            <div className="d-flex flex-column">
              {/* Главное фото */}
              <div
                className="position-relative rounded-4 overflow-hidden shadow-sm mb-3"
                style={{
                  height: "440px",
                  backgroundColor: "#e5e7eb",
                  cursor: "pointer",
                }}
                onClick={() => handleOpenLightbox(activeImgIndex)}
              >
                <img
                  src={house.images[activeImgIndex]?.src}
                  alt={house.images[activeImgIndex]?.alt || house.title}
                  className="w-100 h-100"
                  style={{ objectFit: "cover", transition: "transform 0.3s ease" }}
                />
                <div
                  className="position-absolute bottom-0 start-0 w-100 p-3 d-flex justify-content-between align-items-center"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}
                >
                  <span className="text-white small fw-semibold">
                    {house.images[activeImgIndex]?.alt}
                  </span>
                  <span className="badge bg-dark bg-opacity-75 text-white d-flex align-items-center gap-1 px-2 py-1">
                    <Maximize2 size={13} />
                    <span>Увеличить</span>
                  </span>
                </div>
              </div>

              {/* Миниатюры */}
              <Row className="g-2 mb-3">
                {house.images.map((img, idx) => (
                  <Col key={idx} xs={4} sm={2}>
                    <div
                      onClick={() => setActiveImgIndex(idx)}
                      role="button"
                      className={`rounded-3 overflow-hidden shadow-sm border ${
                        activeImgIndex === idx ? "border-success border-3" : "border-transparent"
                      }`}
                      style={{
                        height: "75px",
                        cursor: "pointer",
                        opacity: activeImgIndex === idx ? 1 : 0.7,
                        transition: "all 0.2s ease",
                      }}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>

          {/* Правая колонка: Карточка бронирования */}
          <Col lg={5}>
            <div className="sticky-top" style={{ top: "85px" }}>
              <Card className="border-0 shadow-sm rounded-4 p-4 bg-white mb-3">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <span className="text-muted small">Стоимость проживания:</span>
                    <div className="fs-2 fw-bold text-success lh-1 mt-1">
                      {house.price}
                    </div>
                    <span className="text-muted small">за 1 сутки</span>
                  </div>
                  <Badge bg="light" text="dark" className="border px-3 py-2 rounded-pill fw-normal">
                    {house.capacity}
                  </Badge>
                </div>

                <div className="p-3 rounded-3 mb-4" style={{ backgroundColor: "#F0FDF4", border: "1px solid #DCFCE7" }}>
                  <div className="d-flex align-items-center gap-2 text-success fw-bold small mb-2">
                    <CheckCircle2 size={18} />
                    <span>В стоимость дома уже включено:</span>
                  </div>
                  <ul className="text-muted small mb-0 ps-3" style={{ lineHeight: "1.6" }}>
                    <li>Пользование собственной мангальной зоной (шампуры, решетка)</li>
                    <li>Постельное белье, банные полотенца и гигиенические наборы</li>
                    <li>Мини-бар с напитками и снеками</li>
                    <li>Детская кроватка и стульчик для кормления — бесплатно</li>
                  </ul>
                </div>

                {/* Параметры дома в цифрах */}
                <div className="row g-2 mb-4 text-center">
                  <div className="col-4">
                    <div className="p-2 rounded-3 bg-light border">
                      <div className="text-muted small" style={{ fontSize: "0.72rem" }}>Площадь</div>
                      <div className="fw-bold text-dark">{house.area}</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="p-2 rounded-3 bg-light border">
                      <div className="text-muted small" style={{ fontSize: "0.72rem" }}>Этажность</div>
                      <div className="fw-bold text-dark">{house.floors}</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="p-2 rounded-3 bg-light border">
                      <div className="text-muted small" style={{ fontSize: "0.72rem" }}>Спальные места</div>
                      <div className="fw-bold text-dark">{house.capacityNumber} чел.</div>
                    </div>
                  </div>
                </div>

                {/* Кнопка бронирования */}
                <div className="d-flex flex-column gap-2">
                  <Button
                    variant="success"
                    className="custom-button-green w-100 py-3 rounded-3 text-white fw-bold fs-6 shadow-sm"
                    onClick={() => {
                      if (onOpenBooking) {
                        onOpenBooking(house.slug);
                      } else {
                        window.location.href = "tel:+79119688269";
                      }
                    }}
                  >
                    Забронировать этот дом
                  </Button>

                  <a
                    href="tel:+79119688269"
                    className="btn btn-outline-success w-100 py-2 rounded-3 fw-semibold d-inline-flex align-items-center justify-content-center gap-2"
                  >
                    <Phone size={16} />
                    <span>Позвонить: 8 911 968 82 69</span>
                  </a>
                </div>

                <div className="d-flex align-items-center justify-content-center gap-2 mt-3 text-muted small" style={{ fontSize: "0.76rem" }}>
                  <ShieldCheck size={14} className="text-success" />
                  <span>Бронирование без посредников и комиссий</span>
                </div>
              </Card>
            </div>
          </Col>
        </Row>

        {/* Описание и Ключевые преимущества */}
        <Row className="g-4 mb-5">
          <Col lg={8}>
            {/* Полное описание */}
            <Card className="border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white mb-4">
              <h2 className="fs-4 fw-bold text-dark mb-3">Об этом домике</h2>
              <p className="text-muted" style={{ lineHeight: "1.8", fontSize: "1.02rem" }}>
                {house.fullDescription}
              </p>

              <hr className="my-4 text-muted opacity-25" />

              <h3 className="fs-5 fw-bold text-dark mb-3">Главные особенности:</h3>
              <div className="d-flex flex-column gap-2">
                {house.highlights?.map((highlight, idx) => (
                  <div key={idx} className="d-flex align-items-start gap-2 text-dark">
                    <CheckCircle2 size={18} className="text-success flex-shrink-0 mt-1" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Видеоэкскурсия по домику */}
            {house.video && (
              <Card className="border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white mb-4">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
                  <div>
                    <div className="d-inline-flex align-items-center gap-2 badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill fw-semibold mb-2">
                      <Video size={16} />
                      <span>Видеоэкскурсия</span>
                    </div>
                    <h2 className="fs-4 fw-bold text-dark mb-1">
                      Видеообзор: {house.title}
                    </h2>
                    <p className="text-muted small mb-0">
                      Посмотрите живую видеосъемку комнат, интерьера и прилегающей территории
                    </p>
                  </div>
                </div>

                <div
                  className="rounded-4 overflow-hidden shadow-sm bg-black"
                  style={{
                    maxHeight: "520px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <video
                    controls
                    preload="metadata"
                    poster={house.images[0]?.src}
                    className="w-100"
                    style={{
                      maxHeight: "520px",
                      objectFit: "contain",
                      backgroundColor: "#000",
                    }}
                  >
                    <source src={house.video} />
                    Ваш браузер не поддерживает встроенное видео.
                  </video>
                </div>
              </Card>
            )}

            {/* Сетка удобств и комплектации */}
            <Card className="border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white mb-4">
              <h2 className="fs-4 fw-bold text-dark mb-4">Удобства и комплектация</h2>
              <Row className="g-3">
                {house.features?.map((item, idx) => {
                  const IconComp = iconMap[item.icon] || Sparkles;
                  return (
                    <Col key={idx} sm={6} xs={12}>
                      <div className="p-3 rounded-4 bg-light border h-100 d-flex align-items-start gap-3">
                        <div className="p-2 rounded-3 bg-white text-success shadow-sm flex-shrink-0">
                          <IconComp size={22} />
                        </div>
                        <div>
                          <div className="fw-bold text-dark small">{item.title}</div>
                          <div className="text-muted" style={{ fontSize: "0.8rem", lineHeight: "1.4" }}>
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Card>

            {/* Правила проживания и заезда */}
            <Card className="border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
              <h2 className="fs-4 fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                <Clock className="text-success" size={24} />
                Правила проживания и порядок заезда
              </h2>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex flex-column flex-sm-row justify-content-between p-3 rounded-3 bg-light border gap-2">
                  <div>
                    <div className="fw-semibold text-dark">Время заезда и выезда</div>
                    <div className="text-muted small">Бесконтактное заселение по видеоинструкции</div>
                  </div>
                  <div className="text-sm-end fw-bold text-success">
                    Заезд {house.rules.checkIn} • Выезд {house.rules.checkOut}
                  </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between p-3 rounded-3 bg-light border gap-2">
                  <div>
                    <div className="fw-semibold text-dark">Дополнительные гости</div>
                    <div className="text-muted small">Дети до 7 лет без предоставления отдельного места — бесплатно</div>
                  </div>
                  <div className="text-sm-end fw-bold text-dark">
                    {house.rules.extraGuest}
                  </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between p-3 rounded-3 bg-light border gap-2">
                  <div>
                    <div className="fw-semibold text-dark">Страховой депозит</div>
                    <div className="text-muted small">Возвращается в день выезда после уборки дома</div>
                  </div>
                  <div className="text-sm-end fw-bold text-dark">
                    {house.rules.deposit}
                  </div>
                </div>

                <div className="p-3 rounded-3 bg-light border">
                  <div className="fw-semibold text-dark mb-1">🐕 Размещение с животными:</div>
                  <div className="text-muted small">{house.rules.pets}</div>
                </div>

                <div className="p-3 rounded-3 bg-light border">
                  <div className="fw-semibold text-dark mb-1">🚭 Курение:</div>
                  <div className="text-muted small">{house.rules.smoking}</div>
                </div>

                <div className="p-3 rounded-3 bg-light border">
                  <div className="fw-semibold text-dark mb-1">🌙 Режим тишины:</div>
                  <div className="text-muted small">{house.rules.quietHours}</div>
                </div>
              </div>
            </Card>
          </Col>

          {/* Правая колонка: Баня / Чан и Контакты */}
          <Col lg={4}>
            <div className="d-flex flex-column gap-4">
              {/* Банный чан и купель */}
              <Card className="border-0 shadow-sm rounded-4 p-4 bg-white border-top border-4 border-success">
                <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-2 py-1 rounded-pill mb-2 fw-semibold d-inline-block" style={{ width: "fit-content" }}>
                  ♨️ Релакс комплекс
                </span>
                <h3 className="fs-5 fw-bold text-dark mb-2">
                  Баня на дровах и купель Фурако
                </h3>
                <p className="text-muted small mb-3">
                  Дополните ваш отдых в домике настоящей русской парной на березовых дровах и горячим уличным чаном под открытым небом!
                </p>
                <div className="p-2 rounded-3 bg-light border small text-muted mb-3">
                  <div>🔥 <strong>Баня на дровах:</strong> 4 500 ₽ (4–5 часов)</div>
                  <div>♨️ <strong>Баня + Фурако:</strong> 10 500 ₽ (комплекс)</div>
                </div>
                <Button
                  variant="outline-success"
                  className="rounded-pill py-2 fw-semibold small"
                  onClick={() => {
                    if (onOpenBooking) {
                      onOpenBooking(null, "Баня + Купель Фурако (10 500 ₽)");
                    } else {
                      window.location.href = "tel:+79119688269";
                    }
                  }}
                >
                  Заказать баню / купель
                </Button>
              </Card>

              {/* Помощь администратора */}
              <Card className="border-0 shadow-sm rounded-4 p-4 bg-white">
                <h3 className="fs-6 fw-bold text-dark mb-2 text-uppercase" style={{ letterSpacing: "0.5px" }}>
                  Остались вопросы?
                </h3>
                <p className="text-muted small mb-3">
                  Свяжитесь с управляющей Валерией или администратором базы отдыха — ответим за пару минут!
                </p>
                <div className="d-flex flex-column gap-2 small">
                  <a href="tel:+79119688269" className="text-success fw-bold text-decoration-none">
                    📞 8 911 968 82 69 (Бронирование)
                  </a>
                  <a href="tel:+79117759163" className="text-dark text-decoration-none">
                    📞 8 911 775 91 63 (Управляющая Валерия)
                  </a>
                  <a
                    href="https://wa.me/79119688269"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-success fw-semibold text-decoration-none mt-1"
                  >
                    💬 Написать в WhatsApp
                  </a>
                  <a
                    href="https://t.me/domabane"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary fw-semibold text-decoration-none"
                  >
                    ✈️ Написать в Telegram
                  </a>
                </div>
              </Card>
            </div>
          </Col>
        </Row>

        {/* Блок «Другие дома базы отдыха» */}
        <div className="mt-5 pt-4 border-top">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4">
            <div>
              <h2 className="fs-3 fw-bold text-dark mb-1">Другие дома базы отдыха</h2>
              <p className="text-muted small mb-0">Выберите подходящий формат для вашей компании</p>
            </div>
            <Link to="/#houses-section" className="btn btn-outline-success rounded-pill px-3 py-1 small">
              Смотреть все дома →
            </Link>
          </div>

          <Row className="g-3">
            {otherHouses.map((other) => (
              <Col key={other.id} xs={12} sm={6} lg={4}>
                <Card className="border-0 shadow-sm rounded-4 overflow-hidden h-100 bg-white">
                  <div style={{ height: "200px", overflow: "hidden" }}>
                    <img
                      src={other.images[0]?.src}
                      alt={other.title}
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <Card.Body className="p-3 d-flex flex-column justify-content-between">
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <Badge bg={other.badgeColor || "secondary"} className="fw-normal">
                          {other.badge}
                        </Badge>
                        <span className="text-muted small">{other.capacity}</span>
                      </div>
                      <Card.Title className="fs-6 fw-bold mb-2">{other.title}</Card.Title>
                      <Card.Text className="text-muted small mb-3" style={{ fontSize: "0.82rem" }}>
                        {other.shortDescription}
                      </Card.Text>
                    </div>
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="fs-5 fw-bold text-success">{other.price}</span>
                        <span className="text-muted small">за сутки</span>
                      </div>
                      <Link
                        to={`/houses/${other.slug}`}
                        className="btn btn-outline-success w-100 rounded-3 py-1 small fw-semibold"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      >
                        Подробнее о домике
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>

      {/* Полноэкранный Lightbox модал */}
      <Modal
        show={lightboxOpen}
        onHide={() => setLightboxOpen(false)}
        centered
        size="xl"
        contentClassName="bg-transparent border-0"
      >
        <div className="position-relative d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
          <button
            type="button"
            className="btn btn-dark bg-opacity-75 text-white position-absolute top-0 end-0 m-3 rounded-circle p-2 border-0 z-3"
            onClick={() => setLightboxOpen(false)}
          >
            <X size={24} />
          </button>

          <button
            type="button"
            className="btn btn-dark bg-opacity-75 text-white position-absolute start-0 top-50 translate-middle-y ms-3 rounded-circle p-2 border-0 z-3"
            onClick={handlePrevLightbox}
          >
            <ChevronLeft size={30} />
          </button>

          <img
            src={house.images[lightboxIndex]?.src}
            alt={house.images[lightboxIndex]?.alt}
            className="rounded-4 shadow-lg"
            style={{
              maxHeight: "85vh",
              maxWidth: "92vw",
              objectFit: "contain",
            }}
          />

          <button
            type="button"
            className="btn btn-dark bg-opacity-75 text-white position-absolute end-0 top-50 translate-middle-y me-3 rounded-circle p-2 border-0 z-3"
            onClick={handleNextLightbox}
          >
            <ChevronRight size={30} />
          </button>

          <div
            className="position-absolute bottom-0 start-50 translate-middle-x mb-3 px-3 py-1 rounded-pill bg-dark bg-opacity-75 text-white small"
          >
            {lightboxIndex + 1} / {house.images.length} • {house.images[lightboxIndex]?.alt}
          </div>
        </div>
      </Modal>
    </div>
  );
};
