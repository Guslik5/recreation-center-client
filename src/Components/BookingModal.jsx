import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col, Alert, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { housesData } from "../data/housesData";
import { Calendar, Users, Phone, User, CheckCircle2, Shield, MessageSquare, Home } from "lucide-react";

export const BookingModal = ({ show, onHide, initialHouseSlug, initialService }) => {
  const [selectedHouse, setSelectedHouse] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guestsCount, setGuestsCount] = useState("2");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [agree, setAgree] = useState(true);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Автоматический выбор дома или услуги при открытии
  useEffect(() => {
    if (show) {
      setSuccess(false);
      setError("");
      if (initialService) {
        setSelectedHouse(initialService);
      } else if (initialHouseSlug) {
        const found = housesData.find((h) => h.slug === initialHouseSlug);
        setSelectedHouse(found ? found.title : housesData[0].title);
      } else if (!selectedHouse) {
        setSelectedHouse(housesData[0].title);
      }
    }
  }, [show, initialHouseSlug, initialService]);

  // Маска для номера телефона
  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, "");
    if (input.startsWith("7") || input.startsWith("8")) {
      input = input.substring(1);
    }
    input = input.substring(0, 10);

    let formatted = "+7";
    if (input.length > 0) formatted += " (" + input.substring(0, 3);
    if (input.length >= 4) formatted += ") " + input.substring(3, 6);
    if (input.length >= 7) formatted += "-" + input.substring(6, 8);
    if (input.length >= 9) formatted += "-" + input.substring(8, 10);

    setPhone(formatted);
  };

  const todayStr = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Пожалуйста, укажите ваше имя");
      return;
    }

    const rawPhoneDigits = phone.replace(/\D/g, "");
    if (rawPhoneDigits.length < 11) {
      setError("Пожалуйста, введите корректный номер телефона (11 цифр)");
      return;
    }

    if (!checkIn) {
      setError("Пожалуйста, выберите дату заезда");
      return;
    }

    if (!agree) {
      setError("Необходимо согласие на обработку персональных данных (152-ФЗ)");
      return;
    }

    setLoading(true);

    const bookingData = {
      house: selectedHouse,
      checkIn,
      checkOut: checkOut || "Не указана",
      guestsCount,
      name: name.trim(),
      phone: phone.trim(),
      comment: comment.trim(),
      status: "new",
      createdAt: serverTimestamp(),
      createdDate: new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" }),
    };

    try {
      // 1. Сохранение в Firestore
      const docRef = await addDoc(collection(db, "bookings"), bookingData);

      // 2. Отправка вебхука / уведомления на бот-сервис, если он доступен
      try {
        await fetch("/api/notify-booking", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...bookingData, id: docRef.id }),
        });
      } catch (err) {
        // Бот-сервис может быть на другом порту или в процессе запуска, Firestore является надежным источником
        console.log("Bot webhook notification:", err);
      }

      setSuccess(true);
      // Сброс полей
      setComment("");
    } catch (err) {
      console.error("Booking error:", err);
      setError("Не удалось отправить заявку. Пожалуйста, позвоните нам напрямую: 8 911 968 82 69");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      onHide();
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      backdrop="static"
      className="custom-booking-modal"
      contentClassName="border-0 rounded-4 shadow-lg overflow-hidden"
    >
      <Modal.Header closeButton className="border-0 px-4 pt-4 pb-2" style={{ backgroundColor: "#F9FAFB" }}>
        <Modal.Title className="fs-5 fw-bold d-flex align-items-center gap-2">
          <Calendar className="text-success" size={22} />
          {success ? "Заявка принята!" : "Бронирование отдыха в «БАРецкий»"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="px-4 py-3" style={{ backgroundColor: "#F9FAFB" }}>
        {success ? (
          <div className="text-center py-4">
            <CheckCircle2 size={64} className="text-success mb-3 animate-bounce" />
            <h4 className="fw-bold text-dark mb-2">Спасибо, {name}!</h4>
            <p className="text-muted mb-4" style={{ lineHeight: "1.6" }}>
              Ваша заявка на <strong>{selectedHouse}</strong> успешно отправлена.
              Администратор свяжется с вами по номеру <strong className="text-dark">{phone}</strong> в течение 10–15 минут для подтверждения бронирования и ответов на любые вопросы.
            </p>
            <div className="p-3 rounded-3 bg-white border mb-4 text-start small text-muted">
              <div>📅 <strong>Даты:</strong> {checkIn} {checkOut ? `— ${checkOut}` : ""}</div>
              <div>👥 <strong>Гостей:</strong> {guestsCount}</div>
              <div>📞 <strong>Телефон для срочной связи:</strong> <a href="tel:+79119688269" className="text-success fw-bold text-decoration-none">8 911 968 82 69</a></div>
            </div>
            <Button
              variant="success"
              className="custom-button-green px-5 py-2 rounded-pill fw-semibold"
              onClick={handleClose}
            >
              Отлично, понятно
            </Button>
          </div>
        ) : (
          <Form onSubmit={handleSubmit}>
            <p className="text-muted small mb-3">
              Заполните короткую форму — администратор проверит свободные даты и моментально свяжется с вами.
            </p>

            {error && (
              <Alert variant="danger" className="py-2 px-3 small rounded-3 mb-3">
                {error}
              </Alert>
            )}

            {/* Выбор дома или услуги */}
            <Form.Group className="mb-3">
              <Form.Label className="small fw-semibold text-dark d-flex align-items-center gap-1 mb-1">
                <Home size={15} className="text-success" />
                Выберите домик или услугу *
              </Form.Label>
              <Form.Select
                value={selectedHouse}
                onChange={(e) => setSelectedHouse(e.target.value)}
                className="rounded-3 shadow-none border-secondary-subtle"
                required
              >
                {housesData.map((h) => (
                  <option key={h.id} value={h.title}>
                    {h.title} ({h.capacity}, {h.price}/сут)
                  </option>
                ))}
                <option value="Баня + Купель Фурако (10 500 ₽)">
                  ♨️ Комплекс «Баня на дровах + Купель Фурако» (10 500 ₽)
                </option>
                <option value="Только баня на дровах (4 500 ₽)">
                  🏡 Только баня на дровах (4 500 ₽)
                </option>
                <option value="Индивидуальный подбор отдыха">
                  ✨ Помочь с выбором (консультация)
                </option>
              </Form.Select>
            </Form.Group>

            {/* Даты заезда и выезда */}
            <Row className="g-2 mb-3">
              <Col xs={6}>
                <Form.Group>
                  <Form.Label className="small fw-semibold text-dark mb-1">
                    Дата заезда *
                  </Form.Label>
                  <Form.Control
                    type="date"
                    min={todayStr}
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="rounded-3 shadow-none border-secondary-subtle"
                    required
                  />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label className="small fw-semibold text-dark mb-1">
                    Дата выезда
                  </Form.Label>
                  <Form.Control
                    type="date"
                    min={checkIn || todayStr}
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="rounded-3 shadow-none border-secondary-subtle"
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Количество гостей */}
            <Form.Group className="mb-3">
              <Form.Label className="small fw-semibold text-dark d-flex align-items-center gap-1 mb-1">
                <Users size={15} className="text-success" />
                Количество гостей *
              </Form.Label>
              <Form.Select
                value={guestsCount}
                onChange={(e) => setGuestsCount(e.target.value)}
                className="rounded-3 shadow-none border-secondary-subtle"
              >
                <option value="1-2 гостя">1-2 гостя</option>
                <option value="3-4 гостя">3-4 гостя</option>
                <option value="5-6 гостей">5-6 гостей</option>
                <option value="7-8 гостей">7-8 гостей</option>
                <option value="Более 8 гостей">Более 8 гостей (по согласованию)</option>
              </Form.Select>
            </Form.Group>

            {/* Имя и Телефон */}
            <Row className="g-2 mb-3">
              <Col sm={6} xs={12}>
                <Form.Group>
                  <Form.Label className="small fw-semibold text-dark d-flex align-items-center gap-1 mb-1">
                    <User size={15} className="text-success" />
                    Ваше имя *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Например, Анна"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-3 shadow-none border-secondary-subtle"
                    required
                  />
                </Form.Group>
              </Col>
              <Col sm={6} xs={12}>
                <Form.Group>
                  <Form.Label className="small fw-semibold text-dark d-flex align-items-center gap-1 mb-1">
                    <Phone size={15} className="text-success" />
                    Телефон *
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="+7 (999) 000-00-00"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="rounded-3 shadow-none border-secondary-subtle"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Пожелания / комментарий */}
            <Form.Group className="mb-3">
              <Form.Label className="small fw-semibold text-dark d-flex align-items-center gap-1 mb-1">
                <MessageSquare size={15} className="text-muted" />
                Пожелания (необязательно)
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Нужна детская кроватка, планируем баню, приедем с собакой и т.д."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="rounded-3 shadow-none border-secondary-subtle"
                style={{ resize: "none", fontSize: "0.88rem" }}
              />
            </Form.Group>

            {/* 152-ФЗ согласие */}
            <Form.Group className="mb-4">
              <Form.Check
                type="checkbox"
                id="booking-privacy-check"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                label={
                  <span className="small text-muted" style={{ fontSize: "0.8rem" }}>
                    Согласен на обработку персональных данных в соответствии с{" "}
                    <Link
                      to="/privacy-policy"
                      target="_blank"
                      className="text-success text-decoration-underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Политикой конфиденциальности (152-ФЗ)
                    </Link>
                  </span>
                }
              />
            </Form.Group>

            {/* Кнопка отправки */}
            <div className="d-flex flex-column gap-2">
              <Button
                type="submit"
                variant="success"
                disabled={loading || !agree}
                className="custom-button-green w-100 py-2 rounded-3 text-white fw-semibold d-flex align-items-center justify-content-center gap-2"
              >
                {loading ? (
                  <>
                    <Spinner animation="border" size="sm" />
                    <span>Отправка заявки...</span>
                  </>
                ) : (
                  <span>Отправить заявку на бронь</span>
                )}
              </Button>

              <div className="text-center text-muted small mt-1" style={{ fontSize: "0.78rem" }}>
                🔒 Бронирование ни к чему вас не обязывает • Оплата при заселении
              </div>
            </div>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
};
