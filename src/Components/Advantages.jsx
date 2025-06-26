import React from 'react';
import {Card, CardGroup, Col, Container, Row} from "react-bootstrap";
import image from "../assets/check-mark-icon.png"
import {CardAdvantages} from "./CardAdvantages.jsx";

export const Advantages = () => {
    const info = [
        {
            title: "Уютные домики",
            description: "В каждом доме вас ждет полный комфорт: ванная комната с душем и туалетом," +
                         " оборудованная кухня с плитой и посудой, уютная спальня с постельным бельем," +
                         " а также необходимые средства личной гигиены – зубная щетка," +
                         " гель для душа и шампунь. Дополнительно предлагается мини-бар с напитками.",
            img: image,
        },
        {
            title: "Батут и детская площадка",
            description: "Для маленьких гостей предусмотрены развлечения на любой вкус:" +
                         " батут для веселых прыжков и современная детская площадка" +
                         " для активных игр на свежем воздухе.",
            img: image,
        },
        {
            title: "Спортивная техника",
            description: "Любителям активного отдыха предлагается современная спортивная техника:" +
                         " квадроциклы, снегоходы, велосипеды и питбайки," +
                         " чтобы ощутить прилив адреналина и исследовать окрестности.",
            img: image,
        },
    ]
    return (
        <>
            <div className="d-flex justify-content-center text-center fs-1 m-5">Преимущества нашей базы</div>
            <CardGroup className="mx-5 border-bottom">
                {info.map((value) => {
                    return (
                        <CardAdvantages title={value.title} description={value.description} image={value.img}/>
                    )
                })}
            </CardGroup>
        </>
    )
}