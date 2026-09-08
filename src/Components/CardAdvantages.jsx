import React from 'react';
import { Card } from "react-bootstrap";
import '../Css/customCard.css';

export const CardAdvantages = ({ title, description, image, icon, badge }) => {
    return (
        <Card className="border-0 w-100 shadow-sm rounded-4 p-2 py-3 text-center h-100 d-flex flex-column" style={{ backgroundColor: "#FAFAFA" }}>
            {badge && (
                <div className="d-flex justify-content-center mb-1">
                    <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-2 py-1 rounded-pill" style={{ fontSize: "0.68rem" }}>
                        {badge}
                    </span>
                </div>
            )}
            {icon ? (
                <div 
                    className="d-flex align-items-center justify-content-center rounded-circle mx-auto my-2 shadow-sm"
                    style={{ width: "44px", height: "44px", backgroundColor: "#ffffff", fontSize: "22px" }}
                >
                    {icon}
                </div>
            ) : (
                <Card.Img variant="top" src={image} style={{ width: "40px", height: "40px" }} className="align-self-center my-2"/>
            )}
            <Card.Body className="d-flex flex-column text-center p-1 flex-grow-1">
                <div className="fw-bold mb-1" style={{ fontSize: "0.92rem", lineHeight: "1.2" }}>{title}</div>
                <div className="text-muted mt-auto" style={{ fontSize: "0.76rem", lineHeight: "1.35" }}>
                    {description}
                </div>
            </Card.Body>
        </Card>
    );
};