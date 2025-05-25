import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import photo1 from "../assets/Bathhouse/photo1.jpg"
import photo2 from "../assets/Bathhouse/photo2.jpg"
import photo3 from "../assets/Bathhouse/photo3.jpg"
import photo4 from "../assets/Bathhouse/photo4.jpg"

export const Bathhouse = () => {
    const largeImage = {
        src: photo1,
        alt: 'Large Image',
    };

    const smallImages = [
        {
            src: photo2,
            alt: 'Small Image 1',
        },
        {
            src: photo3,
            alt: 'Small Image 2',
        },
        {
            src: photo4,
            alt: 'Small Image 3',
        },
    ];

    const smallImageStyle = {
        marginBottom: '5px',
        padding: "6px"
    };

    const bigImageStyle = {
        padding: "6px"
    }


    return (
        <Container className=" border-bottom">
            <Row className="m-5">
                <Col md={8}>
                    <Row>
                        <Col md={12} xs={12} style={bigImageStyle}>
                            <img
                                src={largeImage.src}
                                alt={largeImage.alt}
                                className="img-fluid"
                                style={{ width: '100%' }}
                            />
                        </Col>
                    </Row>

                    <Row>
                        {smallImages.map((image, index) => (
                            <Col key={index} md={4} xs={4} style={smallImageStyle}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="img-fluid"
                                    style={{ width: '100%'}}
                                />
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col md={4} className="justify-content-center align-content-center" style={{backgroundColor: "#FAFAFA", padding: "40px", borderRadius: "30px"}}>
                    <h3>
                        Очищение души и тела: ваш идеальный отдых в бане.
                    </h3>
                    <p>
                        Погрузитесь в мир тепла и уюта, где каждая клеточка вашего
                        тела наполняется энергией и здоровьем.
                        Наши бани откроют вам двери в мир истинного расслабления,
                        где вы сможете забыть о заботах и насладиться целительной силой бани.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}