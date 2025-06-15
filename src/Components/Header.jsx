import React from 'react';
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import phoneIcon from '../assets/phone-icon.png'
import mapIcon from '../assets/map-icon.png'
import "../Css/header.css"

export default function Header() {

    const handleScrollToHouses = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#808080" }} className="py-2">
            <div className="d-flex w-100 align-items-center justify-content-around"> {/* Шапка для больших экранов */}
                <Navbar.Brand className="mx-3">Logo</Navbar.Brand>
                <Navbar.Text>
                    <a className="text-decoration-none text-white" href="tel:+79123456789">
                        <img src={phoneIcon} alt="Позвонить" width="20" height="20"/>
                        +7 (911) 968-82-69
                    </a>
                </Navbar.Text>
                <Navbar.Text className="hidden">
                    <div className="d-flex align-items-center hidden">
                        <img src={mapIcon} alt="Локация" width="21.5" height="21.5" className="me-2" />
                        <div className='map-info text-white'>
                            Лен область деревня Петровщина, Кировский район, улица Каштановая, дом 8
                        </div>
                    </div>
                </Navbar.Text>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mx-3" />
            </div>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav
                    className="mx-4 d-flex flex-column flex-lg-row align-items-start align-items-lg-center"> {/* Условное расположение */}
                    <button className="nav-link btn btn-link text-white mx-2 p-0">Главная</button>
                    <button
                        className="nav-link btn btn-link text-white mx-2"
                        onClick={() => handleScrollToHouses('houses-section')}
                        style={{padding: 0, border: 'none'}}
                    >
                        Дома
                    </button>
                    <button
                        className="nav-link btn btn-link text-white mx-2"
                        onClick={() => handleScrollToHouses('reviews-section')}
                        style={{padding: 0, border: 'none'}}
                    >
                        Отзывы
                    </button>
                    <button
                        className="nav-link btn btn-link text-white mx-2"
                        onClick={() => handleScrollToHouses('location-section')}
                        style={{padding: 0, border: 'none'}}
                    >
                        Контакты
                    </button>
                    <div className='d-flex align-items-center'>
                        <Navbar.Text className="hidden-small">
                            <div className="d-flex align-items-center">
                                <img src={mapIcon} alt="Локация" width="21.5" height="21.5" className="me-2"/>
                                <div className='map-info text-white'>
                                    Лен область деревня Петровщина, Кировский район, улица Каштановая, дом 8
                                </div>
                            </div>
                        </Navbar.Text>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}