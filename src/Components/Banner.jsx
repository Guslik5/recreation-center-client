import React, { useState } from 'react';
import bannerImg from '../assets/banner.jpg';
import { Button, Card, Form } from "react-bootstrap";
import "../Css/main.css";

export const Banner = () => {
    const [formNumber, setFormNumber] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        console.log(json);

        try {
            const res = await fetch("https://smartforms.dev/submit/685415abc184545ccc0bba83", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: json
            });

            const data = await res.json();

            if (res.ok) {
                console.log("Success", data);
                alert("Форма успешно отправлена!");
                setFormNumber("");
            } else {
                console.error("Ошибка при отправке", data);
                alert("Ошибка при отправке формы: " + res.statusText);  // Добавил statusText
            }

        } catch (error) {
            console.error("Ошибка сети", error);
            alert("Ошибка сети: " + error.message);
        }
    };
    return (
        <Card className="bg-dark text-white rounded-0 border-0 position-relative overflow-hidden">
            <Card.Img
                src={bannerImg}
                alt="База отдыха БАРецкий"
                style={{
                    minHeight: "340px",
                    height: "50vh",
                    maxHeight: "580px",
                    objectFit: "cover",
                    filter: "brightness(0.75)"
                }}
            />
            <Card.ImgOverlay className="d-flex align-items-center flex-column justify-content-center text-center p-3 p-md-5">
                {/* Title block - always visible, perfectly centered on mobile */}
                <div className="my-auto my-md-0">
                    <Card.Text
                        className="mb-1 text-uppercase text-white-50 small fw-semibold"
                        style={{ letterSpacing: "1.2px", fontSize: "0.85rem" }}
                    >
                        Бани и техника для развлечений
                    </Card.Text>
                    <Card.Title className="display-5 display-md-4 fw-bold mb-2">
                        База отдыха БАРецкий
                    </Card.Title>
                    <p className="d-md-none text-white-50 small mb-3 mx-auto" style={{ maxWidth: "290px" }}>
                        Уютные домики, баня на дровах и активный отдых на природе
                    </p>
                    <button
                        type="button"
                        className="btn btn-success custom-button-green rounded-pill px-4 py-2 d-md-none fw-semibold shadow"
                        onClick={() => {
                            document.getElementById('houses-section')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        style={{ fontSize: "0.88rem" }}
                    >
                        Выбрать домик
                    </button>
                </div>

                {/* Description & Form - shown on desktop / tablet (>= md) */}
                <div className="w-100 d-none d-md-flex flex-column align-items-center mt-auto">
                    <Card.Text
                        className="w-75 fs-5 custom-text-centre mb-4 text-white"
                        style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
                    >
                        Наша база отдыха предлагает 4 уютных домика для отдыха, баню для релаксации,
                        детскую площадку с батутом, аренду квадроциклов и мототехники для активного времяпровождения.
                    </Card.Text>
                    <Form
                        action="https://smartforms.dev/submit/685415abc184545ccc0bba83"
                        method="POST"
                        onSubmit={onSubmit}
                        className="d-flex align-items-center bg-white rounded-3 w-100 mb-4 p-1 shadow-lg"
                        style={{ maxWidth: "560px" }}
                    >
                        <Form.Label className="text-black m-0 mx-2 d-none d-lg-block">Телефон:</Form.Label>
                        <Form.Group className="flex-grow-1 mb-0" controlId="formPhone">
                            <Form.Control
                                className="custom-change-fs border-0"
                                type="tel"
                                placeholder="Введите номер телефона"
                                name="tel"
                                value={formNumber}
                                onChange={(e) => setFormNumber(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button type="submit" className="custom-button-green rounded-3 ms-2 custom-change-width">
                            Забронировать
                        </Button>
                    </Form>
                </div>
            </Card.ImgOverlay>
        </Card>
    );
};