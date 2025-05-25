import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import photo1 from "../assets/SliderPhotos/photo1.jpg"

export default function SliderPhotos() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const images = [
        {
            src: photo1,
            alt: 'Image 1',
        },
        {
            src: photo1,
            alt: 'Image 2',
        },
        {
            src: photo1,
            alt: 'Image 3',
        }
    ];

    return (
        <Container className="p-5 border-bottom" >
            <Row>
                <Col md={6} className="d-flex flex-column justify-content-center px-5">
                    <h2 className="mb-4" style={{maxWidth:"300px"}}>Ваш комфорт – наша забота.</h2>
                    <p style={{maxWidth: "300px"}}>
                        Мы создаем пространство,
                        где вы можете просто расслабиться и
                        наслаждаться каждым моментом.
                    </p>
                </Col>
                <Col md={6}>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {images.map((image, i) => (
                            <Carousel.Item key={i}>
                                <img
                                    className="d-block w-100 rounded-5"
                                    src={image.src}
                                    alt={image.alt}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}
