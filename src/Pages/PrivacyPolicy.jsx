import React from "react";
import { Container, Row, Col, Card, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ShieldCheck, Lock, FileText, Phone, Mail, MapPin, ArrowLeft } from "lucide-react";

export const PrivacyPolicy = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "#F8F9FA", minHeight: "85vh" }}>
      <Container>
        {/* Хлебные крошки */}
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            Главная
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Политика конфиденциальности (152-ФЗ)</Breadcrumb.Item>
        </Breadcrumb>

        <div className="mb-4">
          <Link
            to="/"
            className="btn btn-outline-secondary rounded-pill px-3 py-1 d-inline-flex align-items-center gap-2 mb-3"
            style={{ fontSize: "0.9rem" }}
          >
            <ArrowLeft size={16} />
            <span>Вернуться на главную</span>
          </Link>
          <h1 className="fw-bold fs-2 text-dark mb-2">
            Политика в отношении обработки персональных данных
          </h1>
          <p className="text-muted small">
            В соответствии с Федеральным законом РФ № 152-ФЗ «О персональных данных» • Редакция от 2026 года
          </p>
        </div>

        <Row className="g-4">
          <Col lg={8}>
            <Card className="border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
              <section className="mb-4">
                <h2 className="fs-5 fw-bold text-dark d-flex align-items-center gap-2 mb-3">
                  <ShieldCheck className="text-success" size={22} />
                  1. Общие положения
                </h2>
                <p className="text-muted" style={{ lineHeight: "1.7" }}>
                  Настоящая Политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок сбора, обработки и обеспечения безопасности персональных данных, предпринимаемые <strong>Базой отдыха «БАРецкий»</strong> (далее — «Оператор»), для обеспечения защиты прав и свобод человека и гражданина при обработке его персональных данных.
                </p>
                <p className="text-muted" style={{ lineHeight: "1.7" }}>
                  Использование сервисов сайта <strong>moya-baza.ru</strong> (включая отправку форм бронирования, заказ звонка или оставление отзыва) означает безоговорочное согласие Пользователя с настоящей Политикой и указанными в ней условиями обработки персональных данных.
                </p>
              </section>

              <hr className="my-4 text-muted opacity-25" />

              <section className="mb-4">
                <h2 className="fs-5 fw-bold text-dark d-flex align-items-center gap-2 mb-3">
                  <FileText className="text-success" size={22} />
                  2. Категории обрабатываемых данных
                </h2>
                <p className="text-muted" style={{ lineHeight: "1.7" }}>
                  Оператор осуществляет обработку следующих персональных данных, предоставляемых Пользователем добровольно при заполнении веб-форм:
                </p>
                <ul className="text-muted ps-3" style={{ lineHeight: "1.8" }}>
                  <li>Фамилия, имя, отчество (или имя гостя);</li>
                  <li>Контактный номер телефона (мобильный);</li>
                  <li>Выбранный объект размещения (домик, баня, купель Фурако) и даты заезда/выезда;</li>
                  <li>Количество гостей;</li>
                  <li>Текст отзыва об отдыхе и выставленная оценка (при оставлении отзыва);</li>
                  <li>Обезличенные данные о посетителях (в т.ч. файлы «cookie») с помощью сервисов интернет-статистики (Яндекс Метрика, Google Analytics).</li>
                </ul>
              </section>

              <hr className="my-4 text-muted opacity-25" />

              <section className="mb-4">
                <h2 className="fs-5 fw-bold text-dark d-flex align-items-center gap-2 mb-3">
                  <Lock className="text-success" size={22} />
                  3. Цели обработки персональных данных
                </h2>
                <p className="text-muted" style={{ lineHeight: "1.7" }}>
                  Персональные данные Пользователя обрабатываются исключительно в следующих законных целях:
                </p>
                <ul className="text-muted ps-3" style={{ lineHeight: "1.8" }}>
                  <li>Предоставление консультаций, согласование деталей бронирования домиков и бани;</li>
                  <li>Оформление предварительной заявки и бронирования услуг базы отдыха;</li>
                  <li>Идентификация гостя при подтверждении бронирования по телефону;</li>
                  <li>Публикация добровольных отзывов гостей о качестве сервиса на сайте;</li>
                  <li>Улучшение качества обслуживания гостей базы отдыха.</li>
                </ul>
              </section>

              <hr className="my-4 text-muted opacity-25" />

              <section className="mb-4">
                <h2 className="fs-5 fw-bold text-dark mb-3">
                  4. Принципы и порядок хранения персональных данных
                </h2>
                <p className="text-muted" style={{ lineHeight: "1.7" }}>
                  Безопасность персональных данных, обрабатываемых Оператором, обеспечивается путем реализации правовых, организационных и технических мер:
                </p>
                <ul className="text-muted ps-3" style={{ lineHeight: "1.8" }}>
                  <li>Веб-сайт использует защищенное криптографическое соединение по протоколу <strong>HTTPS / SSL</strong>;</li>
                  <li>Персональные данные ни при каких обстоятельствах <strong>не передаются третьим лицам</strong>, за исключением случаев, установленных законодательством Российской Федерации;</li>
                  <li>Срок обработки персональных данных является неограниченным, либо до момента отзыва согласия субъектом данных.</li>
                </ul>
              </section>

              <hr className="my-4 text-muted opacity-25" />

              <section className="mb-4">
                <h2 className="fs-5 fw-bold text-dark mb-3">
                  5. Права субъекта персональных данных
                </h2>
                <p className="text-muted" style={{ lineHeight: "1.7" }}>
                  Пользователь имеет право в любой момент:
                </p>
                <ul className="text-muted ps-3" style={{ lineHeight: "1.8" }}>
                  <li>Получить информацию, касающуюся обработки его персональных данных;</li>
                  <li>Потребовать уточнения, блокирования или уничтожения своих персональных данных в случае, если они являются неполными, устаревшими или недостоверными;</li>
                  <li>Отозвать свое согласие на обработку персональных данных, направив соответствующее уведомление Оператору по телефону или через мессенджер.</li>
                </ul>
              </section>

              <hr className="my-4 text-muted opacity-25" />

              <section>
                <h2 className="fs-5 fw-bold text-dark mb-3">
                  6. Заключительные положения
                </h2>
                <p className="text-muted mb-0" style={{ lineHeight: "1.7" }}>
                  Оператор вправе вносить изменения в настоящую Политику конфиденциальности без предварительного уведомления Пользователя. Новая редакция вступает в силу с момента ее размещения на сайте. Действующая редакция всегда доступна по адресу: <code>https://moya-baza.ru/privacy-policy</code>.
                </p>
              </section>
            </Card>
          </Col>

          {/* Правая колонка с контактами Оператора */}
          <Col lg={4}>
            <div className="sticky-top" style={{ top: "90px" }}>
              <Card className="border-0 shadow-sm rounded-4 p-4 bg-white mb-3">
                <h3 className="fs-6 fw-bold text-dark mb-3 text-uppercase" style={{ letterSpacing: "0.5px" }}>
                  Оператор персональных данных
                </h3>
                <div className="fw-bold fs-5 text-dark mb-1">База отдыха «БАРецкий»</div>
                <p className="text-muted small mb-3">
                  Ленинградская область, Волосовский район
                </p>

                <div className="d-flex flex-column gap-3 small text-muted">
                  <div className="d-flex align-items-start gap-2">
                    <MapPin size={18} className="text-success flex-shrink-0 mt-1" />
                    <span>дер. Петровщина, ул. Каштановая, 8</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <Phone size={18} className="text-success flex-shrink-0" />
                    <a href="tel:+79119688269" className="text-dark fw-semibold text-decoration-none">
                      8 911 968 82 69
                    </a>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <Mail size={18} className="text-success flex-shrink-0" />
                    <a href="mailto:info@moya-baza.ru" className="text-dark text-decoration-none">
                      info@moya-baza.ru
                    </a>
                  </div>
                </div>

                <hr className="my-3 text-muted opacity-25" />

                <div className="p-3 rounded-3" style={{ backgroundColor: "#F0FDF4", border: "1px solid #BBF7D0" }}>
                  <div className="small text-success fw-semibold mb-1">
                    🔒 Защищенное соединение
                  </div>
                  <div className="text-muted" style={{ fontSize: "0.78rem" }}>
                    Все данные шифруются по стандарту SSL и не передаются рекламным сетям.
                  </div>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
