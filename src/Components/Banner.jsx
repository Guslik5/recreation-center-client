import React from 'react';
import bannerImg from '../assets/banner.jpg';
import {Button, Card, Form} from "react-bootstrap";
import "../Css/main.css"

export const Banner = () => {
    return (
        <Card className="bg-dark text-white rounded-0 border-0">
            <Card.Img src={bannerImg} alt="Card image"/>
            <Card.ImgOverlay className="d-flex align-items-center flex-column justify-content-between text-center">
                <div>
                    <Card.Text className="mb-0 custom-m-1">
                        Бани и техника для развлечений
                    </Card.Text>
                    <Card.Title className="fs-1">База отдыха БАРецкий</Card.Title>
                </div>
                <div className="w-100 d-flex flex-column align-items-center">
                    <Card.Text className="w-75 fs-3 custom-text-centre hidden text-centre">
                        Наша база отдыха предлагает 4 уютных домика для отдыха, баню для релаксации,
                        детскую площадку с батутом, аренду квадроциклов и мото техники для активного время провождения.
                    </Card.Text>

                    <Form className="d-flex align-items-center bg-white rounded-3 w-75 mb-5 p-1">
                        <Form.Label className="text-black m-0 mx-2 hidden">Телефон:</Form.Label>
                        <Form.Group className="flex-grow-1" controlId="formBasicEmail">
                            <Form.Control className="custom-change-fs" type="phone" placeholder="Введите номер телефона" />
                        </Form.Group>
                        <Button type="submit" className="custom-button-green rounded-3 ms-2 h-10 custom-change-width">
                            Забронировать
                        </Button>
                    </Form>
                </div>
            </Card.ImgOverlay>
        </Card>

    );
}