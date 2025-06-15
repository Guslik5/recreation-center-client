import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import avitoIcon from "../assets/avitoIcon.png"
import whatsAppIcon from "../assets/whatsappIcon.png"
import tgIcon from "../assets/tgIcon.png"
import {data} from "react-router-dom";
import phoneIcon from "../assets/phone-icon.png";
import mapIcon from "../assets/map-icon.png";

export const Footer = () => {
    const data = [
        {
            href: "https://www.avito.ru/brands/a52062511cb77b3f403f4cfba6d3a153/all?gdlkerfdnwq=101&shopId=6024799&page_from=from_item_card&iid=4455398072&sellerId=ab4e7fff2e4cb9ba2175940b2f685216",
            alt: "Вконтакте",
            image: avitoIcon
        },
        {
            href: "https://t.me/domabane",
            alt: "Телеграм",
            image: tgIcon
        },
        {
            href: "https://wa.me/79119688269",
            alt: "Вотс апп",
            image: whatsAppIcon
        }
    ]

    const handleClick = (href) => {
        window.open(href, '_blank');
    }
    return (
        <>
            <Container fluid >
                <Row className="d-flex justify-content-between align-items-center p-4" style={{ backgroundColor: "#808080" }}>
                    <Col>
                        Logo
                    </Col>
                    <Col>
                        {data.map((item) => {
                            return (
                                <>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => handleClick(item.href)}
                                        style={{display: 'inline-block', margin: "0.5em"}} // Чтобы можно было задать ширину и высоту
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.alt}
                                            style={{width: '32px', height: '32px'}} // Настройте размеры
                                        />
                                    </a>
                                </>
                            )
                        })}

                    </Col>
                    <Col className="text-center text-small">
                        База отдыха «База БАРецкий» <br/> Официальный сайт. <br/>
                        © 2025.
                    </Col>
                    <Col style={{minWidth: "190px"}}>
                        <a className="text-decoration-none text-white" href="tel:+79123456789">
                            <img src={phoneIcon} alt="Позвонить" width="20" height="20"/>
                            +7 (911) 968-82-69
                        </a>
                    </Col>
                    <Col>
                        <div className="d-flex align-items-center">
                            <img src={mapIcon} alt="Локация" width="21.5" height="21.5" className="me-2"/>
                            <div className='map-info text-white text-small'>
                                Лен область деревня Петровщина, Кировский район, улица Каштановая, дом 8
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}