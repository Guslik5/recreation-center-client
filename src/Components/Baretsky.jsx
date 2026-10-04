import React from 'react';
import { Col, Container, Row, Badge } from "react-bootstrap";
import image1 from "../assets/Baretsky/photo1.jpg";
import image2 from "../assets/Baretsky/photo2.jpg";
import { Sparkles, Flame, Heart, Quote, Send, ArrowRight } from "lucide-react";

export const Baretsky = () => {
    return (
        <section id="about-section" className="py-5 border-bottom" style={{ backgroundColor: "#F9FAFB" }}>
            <Container className="px-3 px-md-4">
                {/* Заголовок секции */}
                <div className="text-center mb-5">
                    <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-3 py-2 rounded-pill mb-2 fw-semibold fs-6">
                        👑 Основатель и вдохновитель проекта
                    </span>
                    <h2 className="fs-1 fw-bold text-dark mb-2">
                        Кто стоит за базой отдыха «БАРецкий»?
                    </h2>
                    <p className="text-muted mx-auto mb-0" style={{ maxWidth: "680px", fontSize: "0.98rem" }}>
                        Стас Барецкий — яркая медийная личность, музыкант, шоумен и создатель самобытного загородного пространства в сосновом бору.
                    </p>
                </div>

                {/* Основная сетка: Фото 1 + Центральная цитата/инфо + Фото 2 */}
                <Row className="g-4 align-items-stretch">
                    {/* Левое фото (в джакузи) */}
                    <Col lg={3} md={6} className="d-flex">
                        <div
                            className="position-relative w-100 rounded-4 overflow-hidden shadow-sm d-flex flex-column justify-content-end p-3"
                            style={{
                                minHeight: "360px",
                                height: "100%",
                                backgroundColor: "#e5e7eb",
                            }}
                        >
                            <img
                                src={image1}
                                alt="Стас Барецкий в джакузи"
                                className="position-absolute top-0 start-0 w-100 h-100 card-house-img"
                                style={{ objectFit: "cover" }}
                            />
                            <div
                                className="position-absolute top-0 start-0 w-100 h-100"
                                style={{
                                    background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
                                }}
                            />
                            <div className="position-relative z-1 text-white">
                                <Badge bg="success" className="px-2 py-1 mb-1 fw-normal">
                                    🛁 Фирменный релакс
                                </Badge>
                                <div className="fw-bold fs-6">Отдых без компромиссов</div>
                                <div className="text-white-50 small" style={{ fontSize: "0.78rem" }}>
                                    Джакузи, парная и полный комфорт
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* Центральный блок: Цитата, философия и факты */}
                    <Col lg={6} md={12} className="d-flex">
                        <div className="p-4 p-xl-5 bg-white rounded-4 shadow-sm border w-100 d-flex flex-column justify-content-between">
                            <div>
                                {/* Цитата Стаса Барецкого */}
                                <div className="p-3 p-md-4 rounded-3 mb-4 position-relative" style={{ backgroundColor: "#F0FDF4", border: "1px solid #DCFCE7" }}>
                                    <Quote size={28} className="text-success opacity-50 position-absolute top-0 end-0 m-3" />
                                    <p className="text-dark fst-italic mb-2" style={{ lineHeight: "1.7", fontSize: "0.98rem" }}>
                                        «Я создал базу отдыха «БАРецкий» как место силы и душевной свободы. Здесь нет занудства и городских рамок — только чистый хвойный воздух, жаркая русская баня на дровах, горячая купель и теплый приём с настоящим русским размахом!»
                                    </p>
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="fw-bold text-success fs-6">— Стас Барецкий</div>
                                        <span className="text-muted small">• шоумен и создатель проекта</span>
                                    </div>
                                </div>

                                {/* Преимущества подхода */}
                                <div className="d-flex flex-column gap-3 mb-4">
                                    <div className="d-flex align-items-start gap-3">
                                        <div className="p-2 rounded-3 bg-light text-success flex-shrink-0 mt-1">
                                            <Sparkles size={18} />
                                        </div>
                                        <div>
                                            <div className="fw-bold text-dark small">Яркий колорит и атмосфера</div>
                                            <div className="text-muted" style={{ fontSize: "0.82rem", lineHeight: "1.4" }}>
                                                Опыт Стаса в сфере развлечений и шоу-бизнеса помогает создавать для гостей незабываемые впечатления и праздничное настроение.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-start gap-3">
                                        <div className="p-2 rounded-3 bg-light text-success flex-shrink-0 mt-1">
                                            <Flame size={18} />
                                        </div>
                                        <div>
                                            <div className="fw-bold text-dark small">Настоящий русский отдых</div>
                                            <div className="text-muted" style={{ fontSize: "0.82rem", lineHeight: "1.4" }}>
                                                Уютные дома из дерева, жаркая парная, горячий банный чан под звездами и мангалы у каждого коттеджа.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-start gap-3">
                                        <div className="p-2 rounded-3 bg-light text-success flex-shrink-0 mt-1">
                                            <Heart size={18} />
                                        </div>
                                        <div>
                                            <div className="fw-bold text-dark small">Душевное гостеприимство</div>
                                            <div className="text-muted" style={{ fontSize: "0.82rem", lineHeight: "1.4" }}>
                                                Забота о каждой детали: чистое белье, бесплатные детские кроватки, тишина соснового леса и внимание к каждому гостю.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Кнопки действий */}
                            <div className="d-flex flex-column flex-sm-row gap-2 pt-3 border-top">
                                <a
                                    href="https://t.me/domabane"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-success rounded-pill px-4 py-2 small fw-semibold d-inline-flex align-items-center justify-content-center gap-2"
                                >
                                    <Send size={15} />
                                    <span>Следить за новостями в Telegram</span>
                                </a>

                                <button
                                    type="button"
                                    onClick={() => document.getElementById('houses-section')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="btn btn-success custom-button-green rounded-pill px-4 py-2 small fw-semibold text-white d-inline-flex align-items-center justify-content-center gap-2"
                                >
                                    <span>Выбрать домик</span>
                                    <ArrowRight size={15} />
                                </button>
                            </div>
                        </div>
                    </Col>

                    {/* Правое фото (на фоне домов с пальцами вверх) */}
                    <Col lg={3} md={6} className="d-flex">
                        <div
                            className="position-relative w-100 rounded-4 overflow-hidden shadow-sm d-flex flex-column justify-content-end p-3"
                            style={{
                                minHeight: "360px",
                                height: "100%",
                                backgroundColor: "#e5e7eb",
                            }}
                        >
                            <img
                                src={image2}
                                alt="Стас Барецкий на базе отдыха БАРецкий"
                                className="position-absolute top-0 start-0 w-100 h-100 card-house-img"
                                style={{ objectFit: "cover" }}
                            />
                            <div
                                className="position-absolute top-0 start-0 w-100 h-100"
                                style={{
                                    background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
                                }}
                            />
                            <div className="position-relative z-1 text-white">
                                <Badge bg="success" className="px-2 py-1 mb-1 fw-normal">
                                    👍 Знак качества
                                </Badge>
                                <div className="fw-bold fs-6">Добро пожаловать в «БАРецкий»!</div>
                                <div className="text-white-50 small" style={{ fontSize: "0.78rem" }}>
                                    Отдых, который запомнится навсегда
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};