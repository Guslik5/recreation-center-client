import React, { useState } from 'react';
import bannerImg from '../assets/banner.jpg';
import { Button, Card, Form } from "react-bootstrap";
import "../Css/main.css";

export const Banner = ({ onOpenBooking }) => {
    const [formNumber, setFormNumber] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        if (onOpenBooking) {
            onOpenBooking();
        } else {
            window.location.href = "tel:+79119688269";
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
                    filter: "brightness(0.72)"
                }}
            />
            <Card.ImgOverlay className="d-flex align-items-center flex-column justify-content-center text-center p-3 p-md-5">
                {/* Title block - always visible */}
                <div className="my-auto my-md-0">
                    <Card.Text
                        className="mb-1 text-uppercase text-white-50 small fw-semibold"
                        style={{ letterSpacing: "1.2px", fontSize: "0.85rem" }}
                    >
                        Уютные домики • Баня на дровах • Чан Фурако
                    </Card.Text>
                    <Card.Title className="display-5 display-md-4 fw-bold mb-2">
                        База отдыха БАРецкий
                    </Card.Title>
                    <p className="d-md-none text-white-50 small mb-3 mx-auto" style={{ maxWidth: "320px" }}>
                        Уютные дома в лесу, русская парная и горячая купель под открытым небом
                    </p>
                    <button
                        type="button"
                        className="btn btn-success custom-button-green rounded-pill px-4 py-2 d-md-none fw-semibold shadow"
                        onClick={() => {
                            if (onOpenBooking) {
                                onOpenBooking();
                            } else {
                                document.getElementById('houses-section')?.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        style={{ fontSize: "0.88rem" }}
                    >
                        Забронировать отдых
                    </button>
                </div>

                {/* Description & Form - shown on desktop / tablet (>= md) */}
                <div className="w-100 d-none d-md-flex flex-column align-items-center mt-auto">
                    <Card.Text
                        className="w-75 fs-5 custom-text-centre mb-4 text-white"
                        style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
                    >
                        Наша база отдыха предлагает 4 комфортных домика, настоящую русскую баню на дровах,
                        горячую купель Фурако на террасе, персональные мангальные зоны и чистый сосновый воздух для идеального релакса.
                    </Card.Text>
                    <div
                        className="d-flex align-items-center justify-content-center gap-3 w-100 mb-3"
                    >
                        <button
                            type="button"
                            onClick={() => onOpenBooking && onOpenBooking()}
                            className="btn btn-success custom-button-green rounded-pill px-5 py-3 fw-bold fs-6 text-white shadow-lg"
                        >
                            📅 Забронировать отдых
                        </button>
                        <button
                            type="button"
                            onClick={() => document.getElementById('houses-section')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn btn-outline-light rounded-pill px-4 py-3 fw-semibold fs-6"
                            style={{ backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(5px)" }}
                        >
                            Выбрать домик →
                        </button>
                    </div>
                </div>
            </Card.ImgOverlay>
        </Card>
    );
};