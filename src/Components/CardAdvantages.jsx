import React from 'react';
import {Card} from "react-bootstrap";
import '../Css/customCard.css'

export const CardAdvantages = ({title, description, image}) => {
    return (
        <Card className="border-0" style={{minWidth: "225px"}}>
            <Card.Img variant="bottom" src={image} className="w-25 align-self-center"/>
            <Card.Body className="text-center">
                <Card.Title className="text-center">{title}</Card.Title>
                <Card.Text className="custom-min-w">
                    <p>{description}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}