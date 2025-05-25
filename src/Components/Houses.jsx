import React from 'react';
import {CardGroup} from "react-bootstrap";
import house1 from "../assets/Houses/house1.jpg"
import house2 from "../assets/Houses/house2.jpg"
import house3 from "../assets/Houses/house3.jpg"
import house4 from "../assets/Houses/house4.jpg"
import {CardHouse} from "./CardHouse.jsx";

export const Houses = () => {
    const info = [
        {
            description: "Двухэтажный домик с сауной – ваш идеальный уголок для релакса" +
                " и восстановления сил." +
                " Комфорт, уют и целебный пар ждут вас!",
            img: house1,
        },
        {

            description: "Идеальное место для восстановления сил: одноэтажный домик на 4 гостей," +
                " где каждая деталь продумана для вашего спокойного отдыха и полного расслабления. ",
            img: house2,
        },
        {
            description: "Стильный дом АФрейм для 4 гостей:" +
                " современный комфорт, роскошное джакузи, близость к природе, незабываемый отдых.",
            img: house3,
        },
        {
            description: "Идеальное убежище для 2 гостей," +
                " где каждая деталь продумана для вашего комфорта и наслаждения." +
                " Уютный домик, где время останавливается.!",
            img: house4,
        },
    ]
    return (
        <>
            <div id="houses-section" className="d-flex justify-content-center text-center fs-1 m-5">Наши дома</div>
            <CardGroup className="mx-5 pb-5 border-bottom">
                {info.map((value) => {
                    return (
                        <CardHouse title={value.title} description={value.description} image={value.img}/>
                    )
                })}
            </CardGroup>
        </>
    )
};