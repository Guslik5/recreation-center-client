import React from 'react';

import {Banner} from "../Components/Banner.jsx";
import {Advantages} from "../Components/Advantages.jsx";
import {PhotoCollage} from "../Components/PhotoCollage.jsx";
import JumbotroneTechnic from "../Components/JumbotroneTechnic.jsx";
import SliderPhotos from "../Components/SliderPhoto.jsx";
import {Houses} from "../Components/Houses.jsx";
import {Bathhouse} from "../Components/Bathhouse.jsx";
import {Baretsky} from "../Components/Baretsky.jsx";
import {AccordionQuestions} from "../Components/AccordionQuestion.jsx";
import {ReactSlickSlider} from "../Components/SlickSlider.jsx";
import {Location} from "../Components/Location.jsx";
import {VideoContainer} from "../Components/VideoContainer.jsx";

export const Home = () => {
    return (
        <>
            <Banner/>
            <Advantages/>
            <PhotoCollage/>
            <JumbotroneTechnic/>
            <SliderPhotos/>
            <Houses/>
            <VideoContainer/>
            <Bathhouse/>
            <Baretsky/>
            <AccordionQuestions/>
            <ReactSlickSlider/>
            <Location/>
        </>
    )
}