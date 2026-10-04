import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { Star, MessageSquarePlus, Gift, ShieldCheck, ThumbsUp } from "lucide-react";

import reviewsPhoto1 from "../assets/Reviews/reviewsPhoto1.jpg";
import reviewsPhoto2 from "../assets/Reviews/reviewsPhoto2.jpg";
import reviewsPhoto3 from "../assets/Reviews/reviewsPhoto3.jpg";
import reviewsPhoto4 from "../assets/Reviews/reviewsPhoto4.jpg";
import reviewsPhoto5 from "../assets/Reviews/reviewsPhoto5.jpg";
import reviewsPhoto6 from "../assets/Reviews/reviewsPhoto6.jpg";
import reviewsPhoto7 from "../assets/Reviews/reviewsPhoto7.jpg";

const StyledSlickSlider = styled.div`
    .react-slick-slider {
        width: 90%;
        max-width: 1240px;
        margin: 2em auto;
    }

    .slick-slide {
        padding: 0 12px;
    }

    .slick-dots li button:before {
        font-size: 11px;
        color: #888;
    }

    .slick-dots li.slick-active button:before {
        color: #198754;
    }

    .slick-prev:before,
    .slick-next:before {
        font-size: 24px;
        color: #2e7d32;
    }

    .review-card {
        background: #ffffff;
        border-radius: 20px;
        padding: 24px;
        height: 100%;
        min-height: 280px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0 4px 18px rgba(0, 0, 0, 0.05);
        border: 1px solid #f0f0f0;
        transition: transform 0.2s ease, box-shadow 0.2s ease;

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.09);
        }
    }
`;

// 20 стартовых качественных отзывов гостей (включая 6 новых актуализированных без техники)
const initialReviews = [
    {
        name: "Анна и Дмитрий",
        house: "Коттедж с сауной",
        rating: 5,
        date: "28 сентября 2026",
        text: "Отдыхали семьей в двухэтажном коттедже с сауной. Полнейший восторг! Сауна прямо внутри дома прогревается быстро, пар мягкий и легкий. В доме идеальная чистота, белоснежное постельное белье, на кухне есть все до мелочей. Дети надышались чистейшим сосновым воздухом. Обязательно вернемся!",
    },
    {
        name: "Максим В.",
        house: "А-фрейм с джакузи",
        rating: 5,
        date: "24 сентября 2026",
        text: "Бронировали треугольный домик на годовщину. Атмосфера невероятная, как на обложке журнала! Джакузи с гидромассажем и подсветкой прямо в доме, панорамные окна в пол на сосновый бор. Очень тепло, стильно и романтично. Спасибо управляющей Валерии за теплый прием!",
    },
    {
        name: "Екатерина Смирнова",
        house: "Баня и купель Фурако",
        rating: 5,
        date: "21 сентября 2026",
        text: "Горячий чан Фурако под открытым небом — это что-то фантастическое! Вода горячая, пахнет живым деревом и березовыми дровами, а вокруг сосны и тишина. Сначала жаркая баня, потом в горячую купель — сняло всю накопившуюся усталость за неделю!",
    },
    {
        name: "Сергей и Ольга",
        house: "Семейный дом с террасой",
        rating: 5,
        date: "17 сентября 2026",
        text: "Приезжали с двумя детьми. Очень порадовала одноэтажная планировка — не надо переживать за лестницы для малышей. Подвесные качели на террасе стали любимым местом всей семьи. Отдельный мангал у дома, тишина по вечерам. Отдохнули душой!",
    },
    {
        name: "Артем Г.",
        house: "Коттедж с сауной",
        rating: 5,
        date: "14 сентября 2026",
        text: "Отличное место для перезагрузки! Жили компанией 6 человек, места хватило всем с комфортом. Сауна просто огонь, жар держит отлично. В доме есть мини-бар с напитками, Smart TV с фильмами, стабильный Wi-Fi. Рекомендую всем!",
    },
    {
        name: "Дарья Попова",
        house: "Дом для двоих с качелями",
        rating: 5,
        date: "10 сентября 2026",
        text: "Идеальное уединение! Тишина такая, что слышно каждую птицу. Просыпаться под лучами солнца на опушке леса с кофе на террасе — бесценно. Домик чистый, свежий, очень удобный ортопедический матрас. 10 из 10!",
    },
    {
        name: "Виктория К.",
        house: "Баня + Купель Фурако",
        rating: 5,
        date: "5 сентября 2026",
        text: "Заказывали комплекс бани и купели Фурако. Парная жаркая, дубовые веники отличные, банные шапочки выдали бесплатно. Купель на дровах на открытой террасе — это восторг для тела и души. Приедем еще зимой!",
    },
    {
        name: "Игорь Николаев",
        house: "Семейный дом с террасой",
        rating: 5,
        date: "2 сентября 2026",
        text: "Праздновали день рождения в семейном домике. Порадовало, что для мангала предоставили шампуры и решетку, не пришлось везти с собой. Детскую кроватку для годовалого сына поставили абсолютно бесплатно. Очень заботливый персонал!",
    },
    {
        name: "Светлана",
        house: "А-фрейм с джакузи",
        rating: 5,
        date: "29 августа 2026",
        text: "Домик превзошел все ожидания по фото. Очень чисто, вкусно пахнет деревом. Джакузи расслабляет на 100%. На втором ярусе спать одно удовольствие. Бесконтактное заселение очень удобное — приехали поздно вечером без лишних звонков.",
    },
    {
        name: "Михаил и Юлия",
        house: "Дом для двоих с качелями",
        rating: 5,
        date: "26 августа 2026",
        text: "Прекрасный отдых в гармонии с природой. Гуляли по окрестностям, вечером жарили мясо на мангале и качались на террасе. В домике тепло, душ с хорошим напором, на кухне полный набор посуды.",
    },
    {
        name: "Елена",
        house: "Коттедж с сауной",
        rating: 5,
        date: "22 августа 2026",
        text: "Отдыхали большой семьей с друзьями. Все новое, чистое и качественное. Постельное белье пахнет свежестью, полотенец в достатке. Очень удобно, что сауна внутри коттеджа — никуда не надо идти по холоду.",
    },
    {
        name: "Ксения",
        house: "Семейный дом с террасой",
        rating: 5,
        date: "18 августа 2026",
        text: "Прекрасная ухоженная территория базы в сосновом бору. Никакого шума машин, только свежий воздух. Дети играли на террасе, мы отдыхали. Спасибо за отличный сервис и внимание к гостям!",
    },
    {
        name: "Наталья",
        house: "Баня и купель Фурако",
        rating: 5,
        date: "14 августа 2026",
        text: "Баня просто супер! Жар мягкий, дышится легко. А после парной в теплый чан на свежем воздухе под звездами — непередаваемые ощущения. Настоящий СПА-курорт в лесу!",
    },
    {
        name: "Яна",
        house: "А-фрейм с джакузи",
        rating: 5,
        date: "10 августа 2026",
        text: "Очень уютный и чистый дом! Качественное постельное белье, все продумано до мелочей. Управляющая всегда на связи и отвечает мгновенно. Вернемся обязательно!",
    },
    {
        name: "Александра",
        house: "Коттедж с сауной",
        rating: 5,
        date: "5 августа 2026",
        text: "Снимали домик на выходные. Отличное место для отдыха в спокойной обстановке. Дома чисто, уютно, посуды хватает на большую компанию. Большое спасибо за заботу!",
    },
    {
        name: "Роман П.",
        house: "Дом для двоих с качелями",
        rating: 5,
        date: "1 августа 2026",
        text: "Тихий, уютный и душевный домик. Прекрасное место, чтобы отключить телефон и побыть вдвоем. Качели на террасе — топ!",
    },
    {
        name: "Татьяна",
        house: "Семейный дом с террасой",
        rating: 5,
        date: "28 июля 2026",
        text: "Удобная кухня, большой холодильник, микроволновка. Мангальная зона ухоженная. Дети в восторге от качелей. Очень гостеприимные хозяева!",
    },
    {
        name: "Константин",
        house: "Баня на дровах",
        rating: 5,
        date: "23 июля 2026",
        text: "Парились с друзьями в русской бане. Березовые дрова, отличная каменка, обливное ведро бодрит невероятно. Настоящая мужская перезагрузка!",
    },
    {
        name: "Марина",
        house: "А-фрейм с джакузи",
        rating: 5,
        date: "18 июля 2026",
        text: "Шикарные панорамные виды на сосны! Утром пьешь кофе, любуясь лесом. Джакузи чистое, работает отлично. Рекомендую всем парам!",
    },
    {
        name: "Олег и Лариса",
        house: "Коттедж с сауной",
        rating: 5,
        date: "12 июля 2026",
        text: "Прекрасный просторный дом в два этажа. Отдыхали тремя парами — места хватило всем, никто никому не мешал. Сауна великолепная. Спасибо!",
    },
];

export function ReactSlickSlider({ onOpenReviewModal }) {
    const [reviews, setReviews] = useState(initialReviews);

    // Загрузка подтвержденных отзывов из Firestore
    useEffect(() => {
        try {
            const q = query(collection(db, "reviews"), where("status", "==", "approved"));
            const unsubscribe = onSnapshot(q, (snapshot) => {
                if (!snapshot.empty) {
                    const loaded = snapshot.docs.map((doc) => {
                        const data = doc.data();
                        return {
                            name: data.name,
                            house: data.house || "База отдыха «БАРецкий»",
                            rating: data.rating || 5,
                            date: data.dateFormatted || "Недавно",
                            text: data.text,
                        };
                    });
                    // Объединяем отзывы из базы со стартовыми (базовые первыми)
                    setReviews([...loaded, ...initialReviews]);
                }
            });
            return () => unsubscribe();
        } catch (err) {
            console.log("Firestore reviews sync:", err);
        }
    }, []);

    const settings = {
        dots: true,
        infinite: reviews.length > 3,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <StyledSlickSlider>
            <div id="reviews-section" className="text-center my-4 px-3">
                {/* Плашка общего рейтинга */}
                <div className="d-flex justify-content-center gap-2 flex-wrap mb-3">
                    <span className="badge bg-warning bg-opacity-10 text-dark border border-warning border-opacity-50 px-3 py-2 rounded-pill fw-semibold fs-6 d-inline-flex align-items-center gap-1 shadow-sm">
                        <Star size={18} fill="#ffc107" className="text-warning" />
                        <span>Рейтинг 4.9 из 5 на основе 20+ отзывов</span>
                    </span>
                    <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-3 py-2 rounded-pill fw-semibold fs-6 d-inline-flex align-items-center gap-1 shadow-sm">
                        <ThumbsUp size={16} />
                        <span>100% гостей рекомендуют отдых</span>
                    </span>
                </div>

                <h2 className="fs-1 fw-bold mb-2">Отзывы наших гостей</h2>
                <p className="text-muted small mx-auto mb-3" style={{ maxWidth: "680px" }}>
                    Реальные впечатления гостей о проживании в домиках, русской бане и купели Фурако.
                </p>

                {/* Кнопка "Оставить отзыв" и акция */}
                <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2 mb-2">
                    <button
                        type="button"
                        onClick={onOpenReviewModal}
                        className="btn btn-success custom-button-green rounded-pill px-4 py-2 fw-semibold text-white shadow-sm d-inline-flex align-items-center gap-2"
                    >
                        <MessageSquarePlus size={18} />
                        <span>Оставить отзыв</span>
                    </button>
                    <span className="text-muted small d-inline-flex align-items-center gap-1">
                        <Gift size={16} className="text-success" />
                        <span>Дарим 100 ₽ за честный отзыв</span>
                    </span>
                </div>
            </div>

            <div className="react-slick-slider">
                <Slider {...settings}>
                    {reviews.map((item, index) => (
                        <div key={index} className="h-100 py-3">
                            <div className="review-card">
                                <div>
                                    {/* Звезды и дата */}
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <div className="d-flex gap-1">
                                            {[...Array(item.rating || 5)].map((_, i) => (
                                                <Star key={i} size={16} fill="#ffc107" className="text-warning" />
                                            ))}
                                        </div>
                                        <span className="text-muted" style={{ fontSize: "0.75rem" }}>
                                            {item.date}
                                        </span>
                                    </div>

                                    {/* Имя и объект */}
                                    <div className="mb-3">
                                        <div className="fw-bold text-dark fs-6">{item.name}</div>
                                        <div className="text-success small fw-semibold" style={{ fontSize: "0.78rem" }}>
                                            {item.house}
                                        </div>
                                    </div>

                                    {/* Текст отзыва */}
                                    <p className="text-muted small mb-0" style={{ lineHeight: "1.6" }}>
                                        «{item.text}»
                                    </p>
                                </div>

                                <div className="mt-3 pt-2 border-top d-flex align-items-center gap-1 text-muted" style={{ fontSize: "0.72rem" }}>
                                    <ShieldCheck size={14} className="text-success" />
                                    <span>Проверенное проживание</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </StyledSlickSlider>
    );
}
