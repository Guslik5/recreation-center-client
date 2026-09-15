import React, { useState } from 'react';
import { Col, Container, Row, Badge } from "react-bootstrap";
import photoPanorama from "../assets/new_images/photo_2026-09-06_06-38-50.jpg";
import photoFacade from "../assets/new_images/photo_2026-09-06_06-38-46.jpg";
import photoGnome from "../assets/new_images/photo_2026-09-06_06-38-49.jpg";
import photoInterior from "../assets/Bathhouse/photo4.jpg";
import furakoPhoto1 from "../assets/BaptismalFont/photo1.jpg";
import furakoPhoto2 from "../assets/BaptismalFont/photo2.jpg";
import furakoPhoto3 from "../assets/BaptismalFont/photo3.jpg";

export const Bathhouse = () => {
    const images = [
        {
            src: furakoPhoto3,
            alt: 'Купель Фурако на террасе бани',
            label: 'Купель Фурако на террасе',
            tag: 'Хит'
        },
        {
            src: furakoPhoto2,
            alt: 'Купель Фурако внутри с подогревом',
            label: 'Внутри деревянной купели',
            tag: 'Релакс'
        },
        {
            src: photoPanorama,
            alt: 'Панорама бани на дровах',
            label: 'Панорама бани',
            tag: 'Баня'
        },
        {
            src: furakoPhoto1,
            alt: 'Купель Фурако под открытым небом',
            label: 'Купель под открытым небом',
            tag: 'Фурако'
        },
        {
            src: photoInterior,
            alt: 'Интерьер парной на дровах',
            label: 'Интерьер парной',
            tag: 'Парная'
        },
        {
            src: photoFacade,
            alt: 'Фасад бани с вывеской',
            label: 'Фасад бани',
            tag: 'Баня'
        },
    ];

    const [activeImgIndex, setActiveImgIndex] = useState(0);

    return (
        <Container id="bathhouse-section" className="border-bottom px-3 px-md-4 py-3">
            <div className="text-center my-4">
                <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-3 py-2 rounded-pill mb-2 fw-semibold">
                    ♨️ Оздоровление и релакс на природе
                </span>
                <h2 className="fs-1 fw-bold mb-2">Баня на дровах и купель Фурако</h2>
                <p className="text-muted small mx-auto" style={{ maxWidth: "680px" }}>
                    Жаркая русская парная с мягким паром и горячая уличная купель из натурального дерева под открытым небом на собственной террасе.
                </p>
            </div>

            <Row className="mb-5 mx-0 g-4 align-items-stretch">
                {/* Левая колонка: Интерактивная галерея */}
                <Col lg={7} className="d-flex flex-column">
                    <div className="position-relative rounded-4 overflow-hidden shadow-sm mb-3" style={{ height: "420px", backgroundColor: "#f0f0f0" }}>
                        <img
                            src={images[activeImgIndex].src}
                            alt={images[activeImgIndex].alt}
                            className="w-100 h-100"
                            style={{ objectFit: "cover", transition: "all 0.3s ease-in-out" }}
                        />
                        <div className="position-absolute bottom-0 start-0 w-100 p-3" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65), transparent)" }}>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="text-white fw-semibold small">
                                    {images[activeImgIndex].label}
                                </span>
                                <Badge bg="success" className="fw-normal">
                                    {images[activeImgIndex].tag}
                                </Badge>
                            </div>
                        </div>
                    </div>

                    {/* Миниатюры */}
                    <Row className="g-2 mb-3">
                        {images.map((img, idx) => (
                            <Col key={idx} xs={4} sm={2}>
                                <div
                                    onClick={() => setActiveImgIndex(idx)}
                                    role="button"
                                    className={`rounded-3 overflow-hidden shadow-sm border ${activeImgIndex === idx ? "border-success border-3" : "border-transparent"}`}
                                    style={{
                                        height: "80px",
                                        cursor: "pointer",
                                        opacity: activeImgIndex === idx ? 1 : 0.75,
                                        transition: "all 0.2s ease"
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

                    {/* Карточки особенностей бани и купели */}
                    <Row className="g-2 flex-grow-1">
                        <Col sm={6} xs={12}>
                            <div className="p-3 rounded-4 bg-white border h-100 d-flex align-items-center gap-3 shadow-sm">
                                <div className="fs-2">🔥</div>
                                <div>
                                    <div className="fw-bold text-dark small">На березовых дровах</div>
                                    <div className="text-muted" style={{ fontSize: "0.78rem" }}>Мягкий, живой и целебный пар</div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} xs={12}>
                            <div className="p-3 rounded-4 bg-white border h-100 d-flex align-items-center gap-3 shadow-sm">
                                <div className="fs-2">🌊</div>
                                <div>
                                    <div className="fw-bold text-dark small">Обливное ведро-водопад</div>
                                    <div className="text-muted" style={{ fontSize: "0.78rem" }}>Бодрящий контраст на террасе</div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} xs={12}>
                            <div className="p-3 rounded-4 bg-white border h-100 d-flex align-items-center gap-3 shadow-sm">
                                <div className="fs-2">🌲</div>
                                <div>
                                    <div className="fw-bold text-dark small">Купель под открытым небом</div>
                                    <div className="text-muted" style={{ fontSize: "0.78rem" }}>Горячая релакс-ванна у леса</div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} xs={12}>
                            <div className="p-3 rounded-4 bg-white border h-100 d-flex align-items-center gap-3 shadow-sm">
                                <div className="fs-2">✨</div>
                                <div>
                                    <div className="fw-bold text-dark small">Идеальная чистота</div>
                                    <div className="text-muted" style={{ fontSize: "0.78rem" }}>Свежая подготовленная вода</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>

                {/* Правая колонка: Тарифы, описание и условия */}
                <Col lg={5} className="d-flex flex-column justify-content-between p-4 rounded-4 shadow-sm" style={{ backgroundColor: "#FAFAFA" }}>
                    <div>
                        <div className="d-flex flex-wrap gap-2 mb-3">
                            <span className="badge bg-light text-dark border px-2 py-2">👥 До 6 человек</span>
                            <span className="badge bg-light text-success border px-2 py-2">🧖 Шапки и полотенца бесплатно</span>
                        </div>

                        <h3 className="fw-bold fs-4 mb-3">
                            Тарифы на парение и отдых:
                        </h3>

                        {/* Вариант 1: Только баня */}
                        <div className="p-3 rounded-4 bg-white shadow-sm border mb-3">
                            <div className="d-flex justify-content-between align-items-start mb-1">
                                <div className="fw-bold text-dark fs-5">
                                    🏡 Только баня на дровах
                                </div>
                                <div className="text-end">
                                    <div className="fs-5 fw-bold" style={{ color: "#2e7d32" }}>4 500 ₽</div>
                                    <span className="text-muted" style={{ fontSize: "0.75rem" }}>сеанс 4–5 часов</span>
                                </div>
                            </div>
                            <p className="text-muted small mb-0">
                                Настоящая русская парная на дровах до 6 человек. Чистые банные шапки и полотенца уже входят в стоимость.
                            </p>
                        </div>

                        {/* Вариант 2: Баня + Фурако (Хит) */}
                        <div className="p-3 rounded-4 bg-white shadow-sm border border-2 border-success mb-3 position-relative">
                            <Badge bg="success" className="position-absolute top-0 end-0 m-2 px-2 py-1 fw-normal">
                                🔥 Премиум релакс
                            </Badge>
                            <div className="d-flex justify-content-between align-items-start mb-1 pe-4">
                                <div className="fw-bold text-dark fs-5">
                                    ♨️ Баня + Купель Фурако
                                </div>
                            </div>
                            <div className="d-flex align-items-baseline gap-2 mb-2">
                                <span className="fs-4 fw-bold" style={{ color: "#198754" }}>10 500 ₽</span>
                                <span className="text-muted small">/ сеанс 4–5 часов (комплекс)</span>
                            </div>
                            <p className="text-muted small mb-0">
                                Полный комплекс отдыха: <strong>4–5 часов и бани, и купели Фурако</strong> на террасе под открытым небом. Горячая вода с древесным подогревом в сочетании с паром — максимальное удовольствие!
                            </p>
                        </div>

                        {/* Важное правило */}
                        <div className="p-3 rounded-3 mb-3" style={{ backgroundColor: "#FFF9E6", border: "1px solid #FFE082" }}>
                            <div className="d-flex align-items-start gap-2">
                                <span className="fs-5">⚠️</span>
                                <div className="small text-dark">
                                    <strong>Обратите внимание:</strong> отдельно купель Фурако не предоставляется — бронирование возможно только в комплексе <strong>«Баня + Фурако» (10 500 ₽)</strong> либо <strong>«Только баня» (4 500 ₽)</strong>.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        {/* Кнопка заказа */}
                        <a
                            href="tel:+79119688269"
                            className="btn btn-success custom-button-green w-100 py-2 rounded-3 text-white text-decoration-none fw-semibold mb-3"
                        >
                            Забронировать баню / фурако
                        </a>

                        {/* Товары для бани */}
                        <div className="p-3 rounded-3 bg-white border">
                            <div className="fw-bold text-dark mb-2 small text-uppercase" style={{ letterSpacing: "0.5px" }}>
                                🌿 В продаже у администратора:
                            </div>
                            <div className="row g-1 small text-muted">
                                <div className="col-6 d-flex justify-content-between pe-2">
                                    <span>Дубовый веник:</span>
                                    <strong className="text-dark">800 ₽</strong>
                                </div>
                                <div className="col-6 d-flex justify-content-between ps-2">
                                    <span>Березовый веник:</span>
                                    <strong className="text-dark">700 ₽</strong>
                                </div>
                                <div className="col-6 d-flex justify-content-between pe-2">
                                    <span>Арома-масла:</span>
                                    <strong className="text-dark">350 ₽</strong>
                                </div>
                                <div className="col-6 d-flex justify-content-between ps-2">
                                    <span>Дрова 7 шт.:</span>
                                    <strong className="text-dark">300 ₽</strong>
                                </div>
                                <div className="col-6 d-flex justify-content-between pe-2">
                                    <span>Древесный уголь:</span>
                                    <strong className="text-dark">350 ₽</strong>
                                </div>
                                <div className="col-6 d-flex justify-content-between ps-2">
                                    <span>Розжиг:</span>
                                    <strong className="text-dark">300 ₽</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};