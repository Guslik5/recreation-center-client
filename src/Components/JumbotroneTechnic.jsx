import React from "react";
import { Container } from "react-bootstrap";
import paralaxImages from "../assets/parallaxImage.jpg";
import styled from "styled-components";

const StyledContainer = styled.div`
    .jumbo {
        background: url("${paralaxImages}") no-repeat fixed bottom;
        background-size: cover;
        position: relative;
        z-index: -2;
        height: 350px;
        color: #efefef;
    }
    
    .overlay {
        position: absolute;
        background-color: #000;
        opacity: 0.6;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
    }
    .text{
        font-size: 1em;
        max-width: 500px;
    }
    @media (max-width: 500px) {
        .text{
            font-size: 0.75em;
        }
    }
`;

const Jumbotrone = () => {
    return (
        <StyledContainer>
            <div className="jumbotron jumbotron-fluid jumbo p-5">
                <div className="overlay"></div>
                <Container className="pt-5">
                    <h1 className="pt-5">Адреналин в каждом движении!</h1>
                    <p className="text">
                        Почувствуйте прилив сил и эмоций,
                        управляя мощной техникой! Квадроциклы,
                        снегоходы, питбайки – для тех,
                        кто не боится скорости и готов к новым вызовам.
                    </p>
                </Container>
            </div>
        </StyledContainer>
    );
};

export default Jumbotrone;
