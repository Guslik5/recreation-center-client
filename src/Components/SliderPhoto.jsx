import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import photo1 from "../assets/SliderPhotos/photo1.jpg"
import photo2 from "../assets/SliderPhotos/photo2.jpg"
import photo3 from "../assets/SliderPhotos/photo3.jpg"
import photo4 from "../assets/SliderPhotos/photo4.jpg"
import photo5 from "../assets/SliderPhotos/photo5.jpg"
import photo6 from "../assets/SliderPhotos/photo6.jpg"


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
            src: photo2,
            alt: 'Image 2',
        },
        {
            src: photo3,
            alt: 'Image 3',
        },
        {
            src: photo4,
            alt: 'Image 4',
        },
        {
            src: photo5,
            alt: 'Image 5',
        },
        {
            src: photo6,
            alt: 'Image 6',
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
