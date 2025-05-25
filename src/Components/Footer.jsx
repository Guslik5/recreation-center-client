import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import vkIcon from "../assets/vkIcon.png"
import whatsAppIcon from "../assets/whatsappIcon.png"
import tgIcon from "../assets/tgIcon.png"
import {data} from "react-router-dom";
import phoneIcon from "../assets/phone-icon.png";
import mapIcon from "../assets/map-icon.png";

export const Footer = () => {
    const data = [
        {
            href: "https://vk.com/audios83414367?block=my_playlists&section=all",
            image: vkIcon
        },
        {
            href: "https://t.me/domapetrov",
            image: tgIcon
        },
        {
            href: "https://vk.com/audios83414367?block=my_playlists&section=all",
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
                                            alt="ВКонтакте"
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
                    <Col>
                        <a className="text-decoration-none text-white" href="tel:+79123456789">
                            <img src={phoneIcon} alt="Позвонить" width="20" height="20"/>
                            +7 (912) 345-67-89
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