import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components";
import reviewsPhoto1 from "../assets/Reviews/reviewsPhoto1.jpg"
import reviewsPhoto2 from "../assets/Reviews/reviewsPhoto2.jpg"
import reviewsPhoto3 from "../assets/Reviews/reviewsPhoto3.jpg"
import reviewsPhoto4 from "../assets/Reviews/reviewsPhoto4.jpg"
import reviewsPhoto5 from "../assets/Reviews/reviewsPhoto5.jpg"

const StyledSlickSlider = styled.div`
    /* Основные стили для слайдера */
    .react-slick-slider {
        width: 85%;         /* Занимает всю доступную ширину */
        margin: 3em auto;       /* Центрирование слайдера */
        
    }

    /* Стили для отдельных слайдов */
    .slide-item {
        padding: 20px;       /* Отступ внутри слайда */
        font-size: 18px;      /* Размер шрифта */
    }

    .slick-slide {
        
        padding: 0 10px; /* Отступ по бокам между слайдами */
    }

    /* Стили для точек пагинации */
    .slick-dots li button:before {
        font-size: 12px;     /* Размер точек */
        color: #888;         /* Цвет неактивных точек */
    }

    .slick-dots li.slick-active button:before {
        color: #007bff;    /* Цвет активной точки */
    }

    /* Стили для стрелок навигации */
    .slick-prev:before,
    .slick-next:before {
        font-size: 20px;     /* Размер стрелок */
        color: #333;         /* Цвет стрелок */
    }

    /* Дополнительные стили (например, для hover эффектов) */
    .slick-prev:hover:before,
    .slick-next:hover:before {
        color: #007bff;    /* Цвет стрелок при наведении */
    }
`

export function ReactSlickSlider() {
    const items = [
        {
            img: reviewsPhoto1,
            text: <div><h5>Елена</h5><p style={{fontSize: "0.75em"}}>Просто восторг! Катались на квадроциклах и питбайках всей семьей и с друзьями – это было незабываемо! Адреналин зашкаливал, особенно на сложных участках трассы. Дети визжали от восторга, да и взрослые не отставали!</p></div>,
        },
        {
            img: reviewsPhoto2,
            text: <div><h5>Екатерина</h5><p style={{fontSize: "0.75em"}}>Очень понравилась база отдыха — уютные домики на красивой ухоженной территории с мангальной зоной. Особенно здорово, что можно арендовать технику — я каталась на квадроцикле с семьей, впечатлений море! Отличное место для активного и спокойного отдыха одновременно. Рекомендую!</p></div>,
        },
        {
            img: reviewsPhoto3,
            text: <div><h5>Ксения</h5><p style={{fontSize: "0.75em"}}>Отдыхали зимой с ребёнком — остались в полном восторге! Особенно запомнилась прогулка на снегоходе — ребёнок был в полном восторге, а я получила массу положительных эмоций. Домики тёплые и уютные, территория красивая. Отличное место для зимнего отдыха с детьми!</p></div>,
        },
        {
            img: reviewsPhoto4,
            text: <div><h5>Наталья</h5><p style={{fontSize: "0.75em"}}>База отдыха просто супер! Домики очень комфортные, территория ухоженная и красивая. Мангал и аренда техники — настоящая находка для отлично проведённого времени с друзьями. Обязательно вернусь сюда снова!</p></div>,
        },
        {
            img: reviewsPhoto5,
            text: <div><h5>Алексей</h5><p style={{fontSize: "0.75em"}}> База отдыха — просто огонь! Домики уютные, территория красивая, а мангальная зона — рай для любителей шашлыка (а я люблю!). А когда узнал, что можно покататься на квадроцикле и питбайке — сразу решил, что это не просто отдых, а настоящее приключение. Советую всем, кто хочет отдохнуть с комфортом и зарядиться адреналином (и немного сжечь калории после шашлыка)!</p></div>,
        },
    ];

    const settings = {
        dots: true,             // Показывать точки пагинации
        infinite: true,        // Бесконечная прокрутка
        speed: 500,             // Скорость анимации переключения слайдов (в мс)
        slidesToShow: 3,        // Количество слайдов, отображаемых одновременно
        slidesToScroll: 1,      // Количество слайдов для прокрутки за один раз
        autoplay: false,        // Автоматическая прокрутка слайдов (true/false)
        autoplaySpeed: 3000,    // Скорость автоматической прокрутки (в мс)
        pauseOnHover: true,     // Пауза при наведении мыши (true/false)
        responsive: [            // Адаптивные настройки
            {
                breakpoint: 1024,   // Разрешение экрана, при котором применяются настройки
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,    // Разрешение экрана, при котором применяются настройки
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,    // Разрешение экрана, при котором применяются настройки
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <StyledSlickSlider>
            <div id="reviews-section" className="d-flex justify-content-center text-center fs-1 m-5">Отзывы</div>
            <div className="react-slick-slider"> {/* Обертка для стилизации */}
                <Slider {...settings}>
                    {items.map((item, index) => (
                        <div style={{padding: "20px", margin: "20px"}}>
                            <img src={item.img} alt="" width="100%" className="rounded-5"/>
                            <div key={index} className="slide-item bg-white-grey mt-4 rounded-5"  >
                                {item.text}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </StyledSlickSlider>
    );
}
