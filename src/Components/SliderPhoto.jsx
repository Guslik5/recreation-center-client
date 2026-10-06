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
        <Container className="p-5 border-bottom">
            <style>{`
                .slider-photo-frame {
                    height: 520px;
                    width: 100%;
                    overflow: hidden;
                    background-color: #f3f4f6;
                    border-radius: 2rem;
                }
                @media (max-width: 991px) {
                    .slider-photo-frame {
                        height: 420px;
                    }
                }
                @media (max-width: 576px) {
                    .slider-photo-frame {
                        height: 340px;
                        border-radius: 1.5rem;
                    }
                }
            `}</style>
            <Row className="align-items-center g-4">
                <Col md={6} className="d-flex flex-column justify-content-center px-lg-5">
                    <h2 className="mb-4 fw-bold text-dark" style={{ maxWidth: "340px" }}>
                        Ваш комфорт – наша забота.
                    </h2>
                    <p className="text-muted" style={{ maxWidth: "340px", lineHeight: "1.7" }}>
                        Мы создаем пространство, где вы можете просто расслабиться и
                        наслаждаться каждым моментом в окружении природы.
                    </p>
                </Col>
                <Col md={6}>
                    <div className="shadow-sm" style={{ maxWidth: "480px", margin: "0 auto" }}>
                        <Carousel activeIndex={index} onSelect={handleSelect} interval={4500}>
                            {images.map((image, i) => (
                                <Carousel.Item key={i}>
                                    <div className="slider-photo-frame">
                                        <img
                                            className="d-block w-100 h-100"
                                            style={{
                                                objectFit: "cover",
                                                objectPosition: "center",
                                                display: "block"
                                            }}
                                            src={image.src}
                                            alt={image.alt || `Фото ${i + 1}`}
                                        />
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
