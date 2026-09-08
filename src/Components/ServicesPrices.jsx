import React from 'react';
import { Container, Row, Col, Card, Badge, Button, Table } from 'react-bootstrap';
import bathhouseImg from '../assets/new_images/photo_2026-09-06_06-38-46.jpg';
import quadImg from '../assets/new_images/photo_2026-09-06_06-40-42.jpg';
import pitbikeImg from '../assets/new_images/photo_2026-09-06_06-40-44.jpg';
import hookahImg from '../assets/new_images/hookah.jpg';
import shootingImg from '../assets/new_images/shooting_range.jpg';
import saunaSuppliesImg from '../assets/new_images/sauna_supplies.jpg';

export const ServicesPrices = () => {
    const services = [
        {
            title: "Баня на дровах 🪵",
            price: "4 500 ₽",
            unit: "сеанс (4–5 часов)",
            img: bathhouseImg,
            description: "Баня на 6 человек на дровах. Время парения: 4–5 часов. Шапка и полотенца бесплатно входят в услуги бани.",
            badge: "До 6 человек",
        },
        {
            title: "Тир: стрельба по мишеням 🎯",
            price: "от 1 000 ₽",
            unit: "пистолет / винтовка / комбо",
            img: shootingImg,
            description: "• Пистолет: 100 пулек + 2 мишени — 1 000 ₽\n• Охотничья винтовка 4 Дж: 100 пулек + 2 мишени — 1 500 ₽\n• Комбо (винтовка + пистолет): 200 пулек + 4 мишени — 2 400 ₽",
            badge: "Хит",
            isShooting: true,
        },
        {
            title: "Аренда квадроцикла",
            price: "3 500 ₽",
            unit: "1 час",
            img: quadImg,
            description: "Драйв и море эмоций на лесных трассах. Мощная проходимая техника, инструктаж и шлем предоставляются.",
            badge: "Драйв",
        },
        {
            title: "Аренда питбайка",
            price: "3 500 ₽",
            unit: "1 час",
            img: pitbikeImg,
            description: "Маневренный и резвый кроссовый мотоцикл для любителей скорости и ярких лесных приключений.",
            badge: "Экстрим",
        },
        {
            title: "Аренда кальяна",
            price: "2 000 ₽",
            unit: "готовите сами, время не ограничено",
            img: hookahImg,
            description: "Кальян + уголь + табак + фольга (готовите сами, время не ограничено). Наслаждайтесь густым ароматным дымом на свежем воздухе!",
            badge: "Безлимит",
        },
    ];

    const saunaSupplies = [
        { name: "Веник дубовый", price: "800 ₽", note: "Плотный, душистый, для глубокого прогрева" },
        { name: "Веник березовый", price: "700 ₽", note: "Классический мягкий пар с целебным ароматом" },
        { name: "Арома-масла", price: "350 ₽", note: "Бутылочка натурального эфирного масла для парной" },
        { name: "Дрова для мангала (7 шт.)", price: "300 ₽", note: "Для тех, кто не любит готовить шашлык на углях" },
        { name: "Уголь березовый", price: "350 ₽", note: "Качественный древесный уголь для мангала" },
        { name: "Жидкость для розжига (0.5 л)", price: "300 ₽", note: "Быстрое и безопасное разжигание углей" },
    ];

    const housesPrices = [
        { name: "Дом с сауной", capacity: "до 8 человек", price: "8 500 ₽ / сутки", note: "Собственная сауна, просторная гостиная" },
        { name: "Дом с джакузи", capacity: "до 5 человек", price: "6 500 ₽ / сутки", note: "Стильный А-фрейм с теплым джакузи" },
        { name: "Дом с большой террасой и качелью", capacity: "до 4 человек", price: "6 500 ₽ / сутки", note: "Мангальная зона, подвесные качели" },
        { name: "Дом с большой террасой и качелью", capacity: "до 2 человек", price: "4 500 ₽ / сутки", note: "Уединенный домик для романтического отдыха" },
    ];

    const scrollToBooking = () => {
        window.location.href = "tel:+79119688269";
    };

    return (
        <section id="prices-section" className="py-5" style={{ backgroundColor: "#F9F9F9" }}>
            <Container>
                <div className="text-center mb-5">
                    <h2 className="fs-1 fw-bold mb-3">Услуги и цены</h2>
                    <p className="text-muted mx-auto" style={{ maxWidth: "680px" }}>
                        Прозрачные цены на проживание и активный отдых на базе «БАРецкий».
                        Бронируйте заранее по телефону или через форму на сайте!
                    </p>
                </div>

                {/* Дополнительные услуги и техника */}
                <h3 className="fs-3 fw-semibold mb-4 text-center text-md-start">Дополнительные услуги и активный отдых</h3>
                <Row className="g-4 mb-5 justify-content-center">
                    {services.map((service, index) => (
                        <Col key={index} xs={12} sm={6} lg={4} className="d-flex">
                            <Card className="w-100 border-0 shadow-sm rounded-4 overflow-hidden d-flex flex-column">
                                <div style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                                    <Card.Img
                                        src={service.img}
                                        alt={service.title}
                                        style={{ height: "100%", width: "100%", objectFit: "cover" }}
                                    />
                                    <Badge
                                        bg="dark"
                                        className="position-absolute top-0 start-0 m-3 px-3 py-2 fw-normal"
                                        style={{ opacity: 0.9 }}
                                    >
                                        {service.badge}
                                    </Badge>
                                </div>
                                <Card.Body className="d-flex flex-column p-4 text-center" style={{ backgroundColor: "#ffffff" }}>
                                    <Card.Title className="fs-5 fw-bold mb-2">{service.title}</Card.Title>
                                    <Card.Text className="text-muted small flex-grow-1 mb-3" style={{ whiteSpace: "pre-line" }}>
                                        {service.description}
                                    </Card.Text>
                                    <div className="mt-auto">
                                        <div className="fs-4 fw-bold" style={{ color: "#2e7d32" }}>
                                            {service.price}
                                        </div>
                                        <div className="text-muted small mb-3">{service.unit}</div>
                                        <Button
                                            as="a"
                                            href="tel:+79119688269"
                                            variant="outline-dark"
                                            size="sm"
                                            className="w-100 rounded-3 py-2 text-decoration-none"
                                        >
                                            Заказать
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Планы на этот год */}
                <div className="p-4 p-md-4 rounded-4 shadow-sm mb-5 border" style={{ background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)", color: "#ffffff" }}>
                    <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2 mb-3">
                        <div className="d-flex align-items-center gap-2">
                            <Badge bg="warning" text="dark" className="px-3 py-1 fw-bold text-uppercase" style={{ letterSpacing: "1px", fontSize: "0.75rem" }}>
                                В развитии
                            </Badge>
                            <h4 className="fw-bold mb-0 text-white">Планы на этот год 🚀</h4>
                        </div>
                        <span className="text-white-50 small">Делаем ваш отдых еще комфортнее</span>
                    </div>
                    <Row className="g-3">
                        <Col xs={12} md={4}>
                            <div className="p-3 rounded-3 h-100" style={{ background: "rgba(255, 255, 255, 0.12)", backdropFilter: "blur(4px)" }}>
                                <div className="fs-3 mb-1">🏡</div>
                                <div className="fw-bold mb-1">Новый домик</div>
                                <div className="text-white-50 small">Постройка еще одного уютного домика на 2–3 человека со всеми удобствами.</div>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="p-3 rounded-3 h-100" style={{ background: "rgba(255, 255, 255, 0.12)", backdropFilter: "blur(4px)" }}>
                                <div className="fs-3 mb-1">♨️</div>
                                <div className="fw-bold mb-1">Установка чана-купели</div>
                                <div className="text-white-50 small">Горячий сибирский чан-купель под открытым небом для круглогодичного расслабления.</div>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="p-3 rounded-3 h-100" style={{ background: "rgba(255, 255, 255, 0.12)", backdropFilter: "blur(4px)" }}>
                                <div className="fs-3 mb-1">🚜</div>
                                <div className="fw-bold mb-1">Полноприводные квадроциклы</div>
                                <div className="text-white-50 small">Обновление и покупка новых мощных полноприводных квадроциклов.</div>
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* Блок: Товары для бани и мангала */}
                <div className="p-4 p-md-5 rounded-5 shadow-sm mb-5" style={{ backgroundColor: "#ffffff" }}>
                    <Row className="align-items-center g-4">
                        <Col lg={5}>
                            <div className="position-relative rounded-4 overflow-hidden shadow-sm" style={{ height: "280px" }}>
                                <img
                                    src={saunaSuppliesImg}
                                    alt="Товары для бани и мангала"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                                <Badge bg="success" className="position-absolute top-0 start-0 m-3 px-3 py-2 fs-6 fw-normal">
                                    В наличии у администратора
                                </Badge>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <h3 className="fs-3 fw-bold mb-2">Товары для бани и мангала</h3>
                            <p className="text-muted small mb-4">
                                Все необходимое для отличного пара и вкусного барбекю уже на базе.
                                Не нужно везти с собой тяжелые мешки и аксессуары!
                            </p>
                            <Row className="g-3">
                                {saunaSupplies.map((item, idx) => (
                                    <Col key={idx} xs={12} sm={6}>
                                        <div className="p-3 rounded-3 border bg-light h-100 d-flex flex-column justify-content-between">
                                            <div>
                                                <div className="fw-bold">{item.name}</div>
                                                <div className="text-muted" style={{ fontSize: "0.8rem" }}>{item.note}</div>
                                            </div>
                                            <div className="fs-5 fw-bold mt-2" style={{ color: item.price === "Бесплатно" ? "#198754" : "#2e7d32" }}>
                                                {item.price}
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </div>

                {/* Сводная таблица цен на дома */}
                <div className="p-4 p-md-5 rounded-5 shadow-sm" style={{ backgroundColor: "#ffffff" }}>
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
                        <div>
                            <h3 className="fs-3 fw-semibold mb-1">Прайс-лист на проживание</h3>
                            <p className="text-muted mb-0 small">Цена указана за 1 сутки проживания</p>
                        </div>
                        <div className="d-flex gap-2 flex-wrap mt-2 mt-md-0">
                            <Badge bg="success" className="p-1 fs-6 fw-normal">
                                👶 Детские кроватки, стульчики - бесплатно
                            </Badge>
                            <Badge bg="dark" className="p-1 fs-6 fw-normal">
                                ✨ В каждом доме есть мини-бар
                            </Badge>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <Table hover className="align-middle mb-4">
                            <thead>
                                <tr className="text-muted" style={{ borderBottom: "2px solid #eaeaea" }}>
                                    <th className="py-3">Вариант размещения</th>
                                    <th className="py-3">Вместимость</th>
                                    <th className="py-3">Особенности</th>
                                    <th className="py-3 text-end">Стоимость за сутки</th>
                                </tr>
                            </thead>
                            <tbody>
                                {housesPrices.map((house, idx) => (
                                    <tr key={idx}>
                                        <td className="py-3 fw-bold">{house.name}</td>
                                        <td className="py-3">
                                            <Badge bg="secondary" className="fw-normal">{house.capacity}</Badge>
                                        </td>
                                        <td className="py-3 text-muted small">{house.note}</td>
                                        <td className="py-3 text-end fw-bold fs-5" style={{ color: "#2e7d32" }}>
                                            {house.price}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>

                    {/* Дополнительные важные условия проживания */}
                    <div className="p-3 mb-4 rounded-3 border-start border-4 border-success" style={{ backgroundColor: "#F4FBF4" }}>
                        <Row className="align-items-center">
                            <Col md={8}>
                                <div className="fw-bold text-dark mb-1">
                                    💡 Размещение дополнительных гостей
                                </div>
                                <div className="text-muted small">
                                    Если дом рассчитан, например, на 4 человек, а приезжает 5 человек — доплата за каждого дополнительного гостя составляет <strong>1 000 ₽ / сутки</strong>.
                                </div>
                            </Col>
                            <Col md={4} className="text-md-end mt-2 mt-md-0">
                                <Badge bg="success" className="px-3 py-2 fs-6 fw-normal">
                                    +1 000 ₽ / гость в сутки
                                </Badge>
                            </Col>
                        </Row>
                    </div>

                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 pt-3 border-top">
                        <div className="text-muted small text-center text-md-start">
                            В стоимость каждого дома входит: мангал, постельное белье, полотенца, оборудованная кухня, Wi-Fi и парковка.
                            Детские стульчики и кроватки предоставляются бесплатно по запросу.
                        </div>
                        <div className="d-flex gap-2">
                            <a href="tel:+79119688269" className="btn btn-success custom-button-green px-4 py-2 rounded-3 text-nowrap">
                                Позвонить для брони
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
