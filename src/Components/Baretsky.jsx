import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import image1 from "../assets/Baretsky/photo1.jpg"
import image2 from "../assets/Baretsky/photo2.jpg"

export const Baretsky = () => {
    return (
        <>
            <Container>
                <Row className="m-5">
                    <Col md={4}>
                        <Image src={image1} alt="Барецкий 1" width="100%" rounded/>
                    </Col>
                    <Col md={4} className="text-center">
                        <h3>Кто стоит за этим?</h3>
                        <p className="text-small mt-5">Наша база отдыха – это не только живописное место, но и проект,
                            созданный известной медийной личностью – Стасом Барецким.
                            Стас – человек, которого знают и обсуждают, и это неудивительно,
                            ведь он всегда в центре внимания.
                            Его опыт в сфере развлечений и шоу-бизнеса помогает нам создавать яркие и
                            запоминающиеся события для наших гостей.
                            Следите за новостями – вас ждет много интересного!</p>
                    </Col>
                    <Col md={4}>
                        <Image src={image2} alt="Барецкий 2" width="100%" rounded/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}