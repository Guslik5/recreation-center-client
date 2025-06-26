import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import photo1 from "../assets/PhotoCollage/photo1.jpg"
import photo2 from "../assets/PhotoCollage/photo2.jpg"
import photo3 from "../assets/PhotoCollage/photo3.jpg"
import photo4 from "../assets/PhotoCollage/photo4.jpg"
import photo5 from "../assets/PhotoCollage/photo5.jpg"
import photo6 from "../assets/PhotoCollage/photo6.jpg"

export const PhotoCollage = () => {
    return (
        <>
            <Container className="my-5">
                <Row className="py-4">
                    <Col>
                        <img src={photo1} alt="Фото 1" width="100%"/>
                    </Col>
                    <Col>
                        <img src={photo2} alt="Фото 1" width="100%"/>
                    </Col>
                    <Col>
                        <img src={photo3} alt="Фото 1" width="100%"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={photo4} alt="Фото 1" width="100%"/>
                    </Col>
                    <Col>
                        <img src={photo5} alt="Фото 1" width="100%"/>
                    </Col>
                    <Col>
                        <img src={photo6} alt="Фото 1" width="100%"/>
                    </Col>
                </Row>
            </Container>
            <div className="d-flex justify-content-center fs-5 mb-5">
                <span className="text-center" style={{maxWidth:"600px"}}>
                    Ваш идеальный отдых начинается здесь: почувствуйте гармонию с природой на нашей уютной базе отдыха.
                </span>
            </div>
        </>
    )
}