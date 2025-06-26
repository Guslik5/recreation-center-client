import React from 'react';
import video1 from "../assets/videos/house1.MOV"
import video2 from "../assets/videos/house2.MOV"
import video3 from "../assets/videos/house3.mp4"
import video4 from "../assets/videos/house4.MOV"

import {Col, Container, Row} from "react-bootstrap";

export const VideoContainer = () => {
    return (
        <>
            <div className="d-flex justify-content-center text-center fs-1 m-5">Насладитесь видео о наших домах, сделанными для вас </div>
            <Container className="border-bottom pb-5">
                <Row>
                    <Col md={3} xs={6}>
                        <video controls width="100%">
                            <source src={video1} type="video/mp4"/>
                            Ваш браузер не поддерживает тег video.
                        </video>
                    </Col>
                    <Col md={3} xs={6}>
                        <video controls width="100%">
                            <source src={video2} type="video/mp4"/>
                            Ваш браузер не поддерживает тег video.
                        </video>
                    </Col>
                    <Col md={3} xs={6}>
                        <video controls width="100%">
                            <source src={video3} type="video/mp4"/>
                            Ваш браузер не поддерживает тег video.
                        </video>
                    </Col>
                    <Col md={3} xs={6}>
                        <video controls width="100%">
                            <source src={video4} type="video/mp4"/>
                            Ваш браузер не поддерживает тег video.
                        </video>
                    </Col>
                </Row>
            </Container>

        </>
    )
}