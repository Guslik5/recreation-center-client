import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Badge } from "react-bootstrap";
import {
  HelpCircle,
  Search,
  ChevronDown,
  Home,
  CheckCircle2,
  Flame,
  Target,
  KeyRound,
  ShieldCheck,
  MapPin,
  Gift,
  Baby,
  Heart,
  CalendarClock,
  Phone,
  MessageCircle,
  Sparkles,
  Info
} from "lucide-react";

export const AccordionQuestions = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState([0]); // Первый вопрос открыт по умолчанию

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const categories = [
    { id: "all", label: "Все вопросы", icon: Sparkles },
    { id: "houses", label: "Домики и проживание", icon: Home },
    { id: "bathhouse", label: "Баня и купель Фурако", icon: Flame },
    { id: "activities", label: "Услуги и локация", icon: Target },
    { id: "service", label: "Заселение и бронь", icon: KeyRound },
  ];

  const questionsData = [
    {
      id: 0,
      category: "houses",
      badge: "4 варианта",
      badgeColor: "success",
      icon: Home,
      question: "Какие варианты размещения вы предлагаете?",
      content: (
        <div>
          <p className="mb-3 text-muted" style={{ lineHeight: "1.7" }}>
            На нашей базе отдыха доступны <strong>4 современных комфортабельных домика</strong> со всеми удобствами:
          </p>
          <div className="row g-2 mb-3">
            <div className="col-sm-6">
              <div className="p-3 rounded-3 bg-light border">
                <div className="fw-bold text-dark mb-1">🏡 Коттедж с сауной (до 8 чел.)</div>
                <div className="text-muted small">8 500 ₽/сут • Финская сауна внутри, 2 этажа, просторная гостиная</div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-3 rounded-3 bg-light border">
                <div className="fw-bold text-dark mb-1">📐 А-фрейм с джакузи (до 5 чел.)</div>
                <div className="text-muted small">6 500 ₽/сут • Панорамное остекление, спальный лофт, джакузи</div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-3 rounded-3 bg-light border">
                <div className="fw-bold text-dark mb-1">☀️ Семейный дом с террасой (до 4 чел.)</div>
                <div className="text-muted small">6 500 ₽/сут • Без крутых лестниц, качели, мангал, идеален для детей</div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-3 rounded-3 bg-light border">
                <div className="fw-bold text-dark mb-1">🌿 Дом для двоих с качелями (до 2 чел.)</div>
                <div className="text-muted small">4 500 ₽/сут • Уединение у границы леса, открытая терраса с качелями</div>
              </div>
            </div>
          </div>
          <p className="text-muted small mb-0">
            В каждом доме оборудована полноценная кухня, санузел с душем, мини-бар с напитками (не включен в стоимость), скоростной Wi-Fi, Smart TV и персональная мангальная зона (шампуры и решетка не включены в стоимость).
          </p>
        </div>
      ),
    },
    {
      id: 1,
      category: "houses",
      badge: "Всё включено",
      badgeColor: "success",
      icon: CheckCircle2,
      question: "Что включено в стоимость проживания и есть ли доплата за гостей?",
      content: (
        <div>
          <p className="text-muted mb-3" style={{ lineHeight: "1.7" }}>
            В базовую стоимость аренды любого домика уже включено всё необходимое для загородного отдыха без скрытых платежей:
          </p>
          <ul className="text-muted ps-3 mb-3 small" style={{ lineHeight: "1.8" }}>
            <li>Проживание в доме выбранной вместимости;</li>
            <li>Свежее хлопковое постельное белье и комплект банных полотенец;</li>
            <li>Индивидуальная мангальная зона у дома (шампуры и решетка не включены в стоимость);</li>
            <li>Мини-бар присутствует в каждом доме (напитки и снеки, не включен в стоимость);</li>
            <li>Высокоскоростной безлимитный Wi-Fi на всей территории;</li>
            <li>Бесплатное парковочное место для автомобиля рядом с домом;</li>
            <li>Гигиенические наборы (мыло, гель для душа, фен);</li>
            <li><strong>Детские кроватки и стульчики для кормления — бесплатно по запросу!</strong></li>
          </ul>
          <div className="p-3 rounded-3 bg-success bg-opacity-10 border border-success border-opacity-25 text-success small">
            <strong>💡 Дополнительные гости:</strong> если в дом на 4 человек приезжает 5 гостей — доплата за каждого дополнительного гостя составляет <strong>1 000 ₽ / сутки</strong>.
          </div>
        </div>
      ),
    },
    {
      id: 2,
      category: "bathhouse",
      badge: "Хит релакса",
      badgeColor: "warning",
      icon: Flame,
      question: "Что входит в услуги бани, как работает купель Фурако и какие банные товары есть?",
      content: (
        <div>
          <p className="text-muted mb-3" style={{ lineHeight: "1.7" }}>
            На территории базы отдыха работает настоящая русская баня на березовых дровах и уличная деревянная купель Фурако с подогревом:
          </p>
          <div className="row g-2 mb-3">
            <div className="col-sm-6">
              <div className="p-3 rounded-3 bg-white border shadow-sm h-100">
                <div className="fw-bold text-dark fs-6 mb-1">🏡 Только баня на дровах</div>
                <div className="text-success fw-bold fs-5 mb-2">4 500 ₽ <span className="text-muted fs-6 fw-normal">/ 4–5 часов</span></div>
                <p className="text-muted small mb-0">Русская парная до 6 человек. Чистые банные шапки выдаются бесплатно. Обливное ведро-водопад на террасе.</p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-3 rounded-3 bg-white border border-success border-2 shadow-sm h-100 position-relative">
                <Badge bg="success" className="position-absolute top-0 end-0 m-2 px-2 py-1 fw-normal">Премиум</Badge>
                <div className="fw-bold text-dark fs-6 mb-1">♨️ Баня + Купель Фурако</div>
                <div className="text-success fw-bold fs-5 mb-2">10 500 ₽ <span className="text-muted fs-6 fw-normal">/ 4–5 часов</span></div>
                <p className="text-muted small mb-0">Полный комплекс отдыха: 4–5 часов жаркой бани и горячего чана из натурального дерева под открытым небом.</p>
              </div>
            </div>
          </div>
          <div className="p-3 rounded-3 mb-3" style={{ backgroundColor: "#FFF9E6", border: "1px solid #FFE082" }}>
            <div className="small text-dark">
              <strong>⚠️ Важно:</strong> отдельно купель Фурако не растапливается — доступен только комплекс <strong>«Баня + Фурако» (10 500 ₽)</strong> либо <strong>«Только баня» (4 500 ₽)</strong>.
            </div>
          </div>
          <div className="p-3 rounded-3 bg-light border small text-muted">
            <div className="fw-bold text-dark mb-2">🌿 Банные товары у администратора:</div>
            <div className="row g-1">
              <div className="col-6">Аренда полотенца — 300 ₽</div>
              <div className="col-6">Дубовый веник — 800 ₽</div>
              <div className="col-6">Березовый веник — 700 ₽</div>
              <div className="col-6">Арома-масла — 350 ₽</div>
              <div className="col-6">Дрова (7 шт.) — 300 ₽</div>
              <div className="col-6">Уголь и розжиг — по 300–350 ₽</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      category: "activities",
      badge: "Развлечения",
      badgeColor: "primary",
      icon: Target,
      question: "Какие тарифы действуют на тир, кальян и активный отдых?",
      content: (
        <div>
          <p className="text-muted mb-3" style={{ lineHeight: "1.7" }}>
            Помимо тихого отдыха на природе, вы можете разнообразить досуг интересными активностями:
          </p>
          <div className="d-flex flex-column gap-2 small text-muted mb-3">
            <div className="p-2 rounded-3 bg-light border d-flex justify-content-between align-items-center">
              <div>🎯 <strong>Тир (пистолет):</strong> 100 пулек + 2 мишени</div>
              <strong className="text-dark">1 000 ₽</strong>
            </div>
            <div className="p-2 rounded-3 bg-light border d-flex justify-content-between align-items-center">
              <div>🎯 <strong>Тир (охотничья винтовка 4 Дж):</strong> 100 пулек + 2 мишени</div>
              <strong className="text-dark">1 500 ₽</strong>
            </div>
            <div className="p-2 rounded-3 bg-light border d-flex justify-content-between align-items-center">
              <div>🎯 <strong>Комбо Тир (винтовка + пистолет):</strong> 200 пулек + 4 мишени</div>
              <strong className="text-dark">2 400 ₽</strong>
            </div>
            <div className="p-2 rounded-3 bg-light border d-flex justify-content-between align-items-center">
              <div>💨 <strong>Аренда кальяна:</strong> кальян + уголь + табак + фольга (безлимит)</div>
              <strong className="text-dark">2 000 ₽</strong>
            </div>
            <div className="p-2 rounded-3 bg-light border d-flex justify-content-between align-items-center">
              <div>🤸 <strong>Батут и детская площадка:</strong> для проживающих гостей</div>
              <strong className="text-success">Бесплатно</strong>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      category: "service",
      badge: "Приватность",
      badgeColor: "info",
      icon: KeyRound,
      question: "Как проходит бесконтактное дистанционное заселение?",
      content: (
        <div>
          <p className="text-muted mb-2" style={{ lineHeight: "1.7" }}>
            Весь процесс заезда и выезда организован с максимальным уважением к вашей приватности:
          </p>
          <ul className="text-muted ps-3 small mb-3" style={{ lineHeight: "1.8" }}>
            <li>Перед заездом вы получаете подробное видео-руководство: где припарковать машину, как открыть замок коттеджа и где лежат ключи;</li>
            <li>Никаких очередей, ожидания на стойке регистрации и лишних контактов — вы приезжаете и сразу чувствуете себя дома;</li>
            <li>Администратор постоянно на связи в WhatsApp/Telegram: подскажет температуру сауны, поможет с мангалом или тиром;</li>
            <li>Возврат залога осуществляется на вашу карту сразу после стандартной проверки дома при выезде.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 5,
      category: "service",
      badge: "Гарантия 30 мин",
      badgeColor: "success",
      icon: ShieldCheck,
      question: "Что делать, если произойдет бытовая неполадка?",
      content: (
        <div>
          <p className="text-muted mb-2" style={{ lineHeight: "1.7" }}>
            Мы гарантируем оперативное решение любых вопросов комфорта:
          </p>
          <div className="p-3 rounded-3 bg-light border mb-2 small text-muted">
            🛡️ <strong>Служба дежурного мастера:</strong> на базе постоянно дежурит технический специалист. Если у вас возникнут вопросы по температуре в доме, работе сауны или бытовой технике — вопрос решается в течение <strong>15–30 минут</strong> после одного звонка или сообщения администратору.
          </div>
        </div>
      ),
    },
    {
      id: 6,
      category: "activities",
      badge: "Локация",
      badgeColor: "secondary",
      icon: MapPin,
      question: "Что интересного есть рядом с базой отдыха?",
      content: (
        <div>
          <p className="text-muted mb-3" style={{ lineHeight: "1.7" }}>
            База отдыха «БАРецкий» находится всего в 40 минутах езды от Санкт-Петербурга в экологически чистом районе. В радиусе 10–15 минут:
          </p>
          <div className="row g-2 small text-muted">
            <div className="col-sm-6">🦖 <strong>Палеопарк:</strong> раскопки древних окаменелостей</div>
            <div className="col-sm-6">🪂 <strong>Аэроклуб:</strong> прыжки с парашютом и полеты</div>
            <div className="col-sm-6">🐴 <strong>Конюшня:</strong> конные прогулки по хвойному лесу</div>
            <div className="col-sm-6">🧀 <strong>Эко-ферма:</strong> натуральные сыры и фермерские продукты</div>
            <div className="col-sm-6">⛪️ <strong>Старинный храм и святой источник</strong></div>
            <div className="col-sm-6">🌊 <strong>Каньон реки Лава и Ладожский канал</strong></div>
          </div>
          <div className="text-muted small mt-3">
            Рядом также расположены продуктовые магазины, аптека и доставка.
          </div>
        </div>
      ),
    },
    {
      id: 7,
      category: "service",
      badge: "Бонус",
      badgeColor: "warning",
      icon: Gift,
      question: "Как получить гарантированный возврат 100 ₽ за отзыв?",
      content: (
        <div>
          <p className="text-muted mb-2" style={{ lineHeight: "1.7" }}>
            Мы искренне ценим обратную связь от каждого нашего гостя!
          </p>
          <ol className="text-muted ps-3 small mb-3" style={{ lineHeight: "1.8" }}>
            <li>Нажмите кнопку <strong>«Оставить отзыв»</strong> на сайте (в блоке отзывов);</li>
            <li>Поделитесь своими реальными впечатлениями об отдыхе;</li>
            <li>Отправьте скриншот или ваше имя администратору в WhatsApp или Telegram;</li>
            <li>Мы моментально переведем <strong>100 ₽</strong> вам на карту или баланс телефона!</li>
          </ol>
        </div>
      ),
    },
    {
      id: 8,
      category: "houses",
      badge: "Бесплатно",
      badgeColor: "success",
      icon: Baby,
      question: "Предоставляются ли детские стульчики и кроватки?",
      content: (
        <div>
          <p className="text-muted mb-2" style={{ lineHeight: "1.7" }}>
            Да, мы заботимся о самых маленьких гостях!
          </p>
          <p className="text-muted small mb-0">
            Детские комфортные кроватки-манежи с мягкими матрасиками и надежные стульчики для кормления предоставляются <strong>абсолютно бесплатно</strong>. Пожалуйста, просто укажите необходимость при бронировании домика, чтобы мы заранее подготовили их к вашему приезду.
          </p>
        </div>
      ),
    },
    {
      id: 9,
      category: "houses",
      badge: "Pet-friendly",
      badgeColor: "info",
      icon: Heart,
      question: "Можно ли приехать на отдых с домашними животными?",
      content: (
        <div>
          <p className="text-muted mb-2" style={{ lineHeight: "1.7" }}>
            Да, мы любим животных и с радостью принимаем гостей с воспитанными питомцами!
          </p>
          <p className="text-muted small mb-0">
            Проживание с собаками мелких и средних пород допускается по предварительному согласованию с администратором. Главное условие — чистоплотность питомца и соблюдение комфорта других отдыхающих на территории базы.
          </p>
        </div>
      ),
    },
    {
      id: 10,
      category: "service",
      badge: "Быстро",
      badgeColor: "success",
      icon: CalendarClock,
      question: "Как забронировать домик или баню?",
      content: (
        <div>
          <p className="text-muted mb-3" style={{ lineHeight: "1.7" }}>
            Забронировать отдых можно любым удобным способом:
          </p>
          <div className="d-flex flex-column flex-sm-row gap-2 mb-3">
            <button
              type="button"
              className="btn btn-success custom-button-green rounded-pill px-4 py-2 text-white fw-semibold small"
              onClick={() => onOpenBooking && onOpenBooking()}
            >
              📅 Забронировать на сайте онлайн
            </button>
            <a href="tel:+79119688269" className="btn btn-outline-success rounded-pill px-3 py-2 small fw-semibold">
              📞 8 911 968 82 69 (Бронирование)
            </a>
          </div>
          <p className="text-muted small mb-0">
            Также доступна связь с управляющей Валерией: <a href="tel:+79117753497" className="text-dark fw-bold text-decoration-none">8 911 775 34 97</a> или через <a href="https://wa.me/79119688269" target="_blank" rel="noopener noreferrer" className="text-success fw-bold text-decoration-none">WhatsApp</a>.
          </p>
        </div>
      ),
    },
  ];

  // Фильтрация по категории и строке поиска
  const filteredQuestions = useMemo(() => {
    return questionsData.filter((item) => {
      const matchCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchSearch =
        searchQuery === "" ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="faq-section" className="py-5 border-bottom" style={{ backgroundColor: "#F8F9FA" }}>
      <Container className="px-3 px-md-4">
        {/* Заголовок блока */}
        <div className="text-center mb-4">
          <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-3 py-2 rounded-pill mb-2 fw-semibold fs-6 d-inline-flex align-items-center gap-1">
            <HelpCircle size={16} />
            <span>База знаний и частые вопросы</span>
          </span>
          <h2 className="fs-1 fw-bold text-dark mb-2">Ответы на популярные вопросы</h2>
          <p className="text-muted mx-auto mb-0" style={{ maxWidth: "680px", fontSize: "0.98rem" }}>
            Всё, что важно знать о бронировании, правилах заезда, русской бане с купелью и комфорте вашего отдыха.
          </p>
        </div>

        {/* Поисковая строка */}
        <div className="mx-auto mb-4" style={{ maxWidth: "600px" }}>
          <div className="position-relative">
            <Search
              size={18}
              className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
            />
            <input
              type="text"
              placeholder="Найти ответ (например: баня, дети, залог, чан, питомцы)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control rounded-pill ps-5 py-2 border-secondary-subtle shadow-sm"
              style={{ fontSize: "0.92rem" }}
            />
            {searchQuery && (
              <button
                type="button"
                className="btn btn-link position-absolute top-50 end-0 translate-middle-y me-2 text-muted text-decoration-none small"
                onClick={() => setSearchQuery("")}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Категории (чипсы/табы) */}
        <div className="d-flex justify-content-center gap-2 flex-wrap mb-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`btn btn-sm rounded-pill px-3 py-2 d-inline-flex align-items-center gap-2 fw-semibold transition-all ${
                  isActive
                    ? "btn-success custom-button-green text-white shadow-sm"
                    : "btn-white bg-white text-muted border shadow-sm hover-border-success"
                }`}
                style={{ fontSize: "0.86rem" }}
              >
                <Icon size={15} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Список вопросов */}
        <Row className="justify-content-center">
          <Col lg={10} xl={9}>
            {filteredQuestions.length === 0 ? (
              <div className="text-center py-5 bg-white rounded-4 border shadow-sm p-4">
                <Info size={40} className="text-muted mb-2 opacity-50" />
                <h5 className="fw-bold text-dark">По вашему запросу ничего не найдено</h5>
                <p className="text-muted small mb-3">
                  Попробуйте изменить формулировку или сбросить фильтр
                </p>
                <button
                  type="button"
                  className="btn btn-outline-success btn-sm rounded-pill px-3"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                >
                  Сбросить поиск
                </button>
              </div>
            ) : (
              <div className="d-flex flex-column gap-3">
                {filteredQuestions.map((item) => {
                  const isOpen = openItems.includes(item.id);
                  const ItemIcon = item.icon || HelpCircle;

                  return (
                    <div
                      key={item.id}
                      className={`bg-white rounded-4 border transition-all overflow-hidden ${
                        isOpen
                          ? "border-success border-opacity-50 shadow"
                          : "border-light-subtle shadow-sm"
                      }`}
                      style={{ transition: "all 0.25s ease" }}
                    >
                      {/* Шапка вопроса (кнопка) */}
                      <button
                        type="button"
                        onClick={() => toggleItem(item.id)}
                        className="w-100 p-3 p-md-4 text-start border-0 bg-transparent d-flex align-items-center justify-content-between gap-3"
                        style={{ cursor: "pointer" }}
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div
                            className={`p-2 rounded-3 flex-shrink-0 transition-all ${
                              isOpen
                                ? "bg-success text-white shadow-sm"
                                : "bg-light text-success"
                            }`}
                          >
                            <ItemIcon size={20} />
                          </div>
                          <div>
                            <div className="d-flex align-items-center gap-2 mb-1 flex-wrap">
                              <span className="fw-bold text-dark fs-6" style={{ lineHeight: "1.4" }}>
                                {item.question}
                              </span>
                              {item.badge && (
                                <Badge
                                  bg={item.badgeColor || "success"}
                                  className="fw-normal"
                                  style={{ fontSize: "0.72rem" }}
                                >
                                  {item.badge}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Шеврон с анимацией вращения */}
                        <div
                          className="p-1 rounded-circle flex-shrink-0 text-muted"
                          style={{
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                        >
                          <ChevronDown size={20} />
                        </div>
                      </button>

                      {/* Тело ответа с плавной анимацией */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateRows: isOpen ? "1fr" : "0fr",
                          transition: "grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        <div style={{ overflow: "hidden" }}>
                          <div className="px-3 px-md-4 pb-4 pt-1 border-top border-light">
                            {item.content}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Карточка быстрой связи внизу блока */}
            <div className="mt-4 p-4 rounded-4 bg-white border shadow-sm d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
              <div className="d-flex align-items-center gap-3 text-center text-md-start">
                <div className="p-3 rounded-circle bg-success bg-opacity-10 text-success fs-3 flex-shrink-0">
                  💬
                </div>
                <div>
                  <div className="fw-bold text-dark fs-6">Не нашли ответ на свой вопрос?</div>
                  <div className="text-muted small">
                    Позвоните администратору или напишите в WhatsApp — ответим за 2 минуты!
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-2 justify-content-center">
                <a
                  href="tel:+79119688269"
                  className="btn btn-outline-success btn-sm rounded-pill px-3 py-2 fw-semibold d-inline-flex align-items-center gap-1"
                >
                  <Phone size={14} />
                  <span>8 911 968 82 69</span>
                </a>
                <a
                  href="https://wa.me/79119688269"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success custom-button-green btn-sm rounded-pill px-3 py-2 text-white fw-semibold d-inline-flex align-items-center gap-1"
                >
                  <MessageCircle size={14} />
                  <span>Написать в WhatsApp</span>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};