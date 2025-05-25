import React from 'react';
import {Card} from "react-bootstrap";
import '../Css/customCard.css'

export const CardHouse = ({description, image}) => {
    return (
        <Card className="border-0 m-2" style={{minWidth: "225px"}}>
            <Card.Img variant="bottom" src={image} className="align-self-center pb-3 rounded-5"/>
            <Card.Body className="text-center rounded-5" style={{backgroundColor: "#FAFAFA"}}>
                <Card.Text className="custom-min-w">
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}