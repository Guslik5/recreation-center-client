import React, { useState } from "react";
import { Modal, Button, Form, Alert, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { housesData } from "../data/housesData";
import { Star, CheckCircle2, MessageSquare, User, Home, Gift } from "lucide-react";

export const ReviewModal = ({ show, onHide, onReviewSubmitted }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedHouse, setSelectedHouse] = useState(housesData[0].title);
  const [text, setText] = useState("");
  const [agree, setAgree] = useState(true);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const ratingLabels = {
    1: "Плохо, не понравилось",
    2: "Ниже ожиданий",
    3: "Нормально, но есть нюансы",
    4: "Хорошо, всё понравилось",
    5: "Восторг! Всё идеально (5 из 5)",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Пожалуйста, укажите ваше имя");
      return;
    }

    if (!text.trim() || text.trim().length < 10) {
      setError("Пожалуйста, напишите отзыв подробнее (минимум 10 символов)");
      return;
    }

    if (!agree) {
      setError("Необходимо согласие на обработку персональных данных (152-ФЗ)");
      return;
    }

    setLoading(true);

    const reviewData = {
      name: name.trim(),
      rating: Number(rating),
      house: selectedHouse,
      text: text.trim(),
      status: "pending",
      createdAt: serverTimestamp(),
      dateFormatted: new Date().toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };

    try {
      // 1. Сохранение в Firestore со статусом pending
      const docRef = await addDoc(collection(db, "reviews"), reviewData);

      // 2. Отправка уведомления в Telegram-бот
      try {
        await fetch("/api/notify-review", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...reviewData, id: docRef.id }),
        });
      } catch (err) {
        console.log("Bot webhook notification:", err);
      }

      setSuccess(true);
      setText("");
      if (onReviewSubmitted) onReviewSubmitted();
    } catch (err) {
      console.error("Review submission error:", err);
      setError("Произошла ошибка при отправке отзыва. Пожалуйста, попробуйте еще раз.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      setSuccess(false);
      setError("");
      onHide();
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      className="custom-review-modal"
      contentClassName="border-0 rounded-4 shadow-lg overflow-hidden"
    >
      <Modal.Header closeButton className="border-0 px-4 pt-4 pb-2" style={{ backgroundColor: "#F9FAFB" }}>
        <Modal.Title className="fs-5 fw-bold d-flex align-items-center gap-2">
          <MessageSquare className="text-success" size={22} />
          {success ? "Спасибо за отзыв!" : "Оставить отзыв об отдыхе"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="px-4 py-3" style={{ backgroundColor: "#F9FAFB" }}>
        {success ? (
          <div className="text-center py-4">
            <CheckCircle2 size={64} className="text-success mb-3 animate-bounce" />
            <h4 className="fw-bold text-dark mb-2">Отзыв успешно отправлен!</h4>
            <p className="text-muted mb-4" style={{ lineHeight: "1.6" }}>
              Спасибо, <strong>{name}</strong>! Ваш отзыв отправлен на модерацию и в ближайшее время появится на сайте.
            </p>
            <div className="p-3 rounded-3 bg-white border border-success border-opacity-25 mb-4 text-start small">
              <div className="d-flex align-items-center gap-2 text-success fw-bold mb-1">
                <Gift size={18} />
                <span>Бонус 100 ₽ за отзыв</span>
              </div>
              <div className="text-muted">
                Чтобы получить бонус на карту или телефон, отправьте скриншот или ваше имя администратору в WhatsApp или Telegram:{" "}
                <a href="https://wa.me/79119688269" target="_blank" rel="noopener noreferrer" className="text-success fw-semibold">
                  написать в WhatsApp
                </a>
              </div>
            </div>
            <Button
              variant="success"
              className="custom-button-green px-5 py-2 rounded-pill fw-semibold"
              onClick={handleClose}
            >
              Отлично
            </Button>
          </div>
        ) : (
          <Form onSubmit={handleSubmit}>
            <div className="d-flex align-items-center gap-2 p-2 px-3 rounded-3 bg-success bg-opacity-10 text-success small mb-3 border border-success border-opacity-20">
              <Gift size={18} className="flex-shrink-0" />
              <span>
                <strong>Акция:</strong> дарим 100 ₽ на карту или телефон за честный отзыв!
              </span>
            </div>

            {error && (
              <Alert variant="danger" className="py-2 px-3 small rounded-3 mb-3">
                {error}
              </Alert>
            )}

            {/* Выбор оценки (Звезды) */}
            <Form.Group className="mb-3 text-center">
              <Form.Label className="small fw-semibold text-dark d-block mb-1">
                Ваша оценка отдыха *
              </Form.Label>
              <div className="d-flex justify-content-center gap-2 py-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="btn p-1 border-0 bg-transparent"
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(star)}
                    style={{ cursor: "pointer", transition: "transform 0.15s" }}
                  >
                    <Star
                      size={32}
                      className={
                        (hoverRating || rating) >= star
                          ? "text-warning fill-warning"
                          : "text-secondary opacity-50"
                      }
                      fill={(hoverRating || rating) >= star ? "#ffc107" : "none"}
                    />
                  </button>
                ))}
              </div>
              <div className="small text-muted fw-semibold mt-1">
                {ratingLabels[hoverRating || rating]}
              </div>
            </Form.Group>

            {/* Имя гостя */}
            <Form.Group className="mb-3">
              <Form.Label className="small fw-semibold text-dark d-flex align-items-center gap-1 mb-1">
                <User size={15} className="text-success" />
                Ваше имя *
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Например, Екатерина"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-3 shadow-none border-secondary-subtle"
                required
              />
            </Form.Group>

            {/* В каком доме отдыхали */}
            <Form.Group className="mb-3">
              <Form.Label className="small fw-semibold text-dark d-flex align-items-center gap-1 mb-1">
                <Home size={15} className="text-success" />
                Где вы отдыхали? *
              </Form.Label>
              <Form.Select
                value={selectedHouse}
                onChange={(e) => setSelectedHouse(e.target.value)}
                className="rounded-3 shadow-none border-secondary-subtle"
              >
                {housesData.map((h) => (
                  <option key={h.id} value={h.title}>
                    {h.title}
                  </option>
                ))}
                <option value="Баня на дровах и купель Фурако">♨️ Баня на дровах и купель Фурако</option>
                <option value="Общий отдых на территории">🌲 База отдыха «БАРецкий» (в целом)</option>
              </Form.Select>
            </Form.Group>

            {/* Текст отзыва */}
            <Form.Group className="mb-3">
              <Form.Label className="small fw-semibold text-dark d-flex align-items-center gap-1 mb-1">
                <MessageSquare size={15} className="text-success" />
                Ваш отзыв *
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Расскажите о ваших впечатлениях: чистота, уют, природа, банный чан, работа персонала..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="rounded-3 shadow-none border-secondary-subtle"
                style={{ resize: "none", fontSize: "0.88rem" }}
                required
              />
            </Form.Group>

            {/* Согласие 152-ФЗ */}
            <Form.Group className="mb-4">
              <Form.Check
                type="checkbox"
                id="review-privacy-check"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                label={
                  <span className="small text-muted" style={{ fontSize: "0.8rem" }}>
                    Согласен на публикацию отзыва и обработку данных в соответствии с{" "}
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
            <Button
              type="submit"
              variant="success"
              disabled={loading || !agree}
              className="custom-button-green w-100 py-2 rounded-3 text-white fw-semibold d-flex align-items-center justify-content-center gap-2"
            >
              {loading ? (
                <>
                  <Spinner animation="border" size="sm" />
                  <span>Отправка...</span>
                </>
              ) : (
                <span>Опубликовать отзыв</span>
              )}
            </Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
};
