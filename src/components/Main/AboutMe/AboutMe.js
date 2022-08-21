import React from 'react';
import { Link } from 'react-router-dom';

import photo from '../../../images/about-me/about-me-photo.png';
import arrow from '../../../images/about-me/about-me-arrow.svg';

import './AboutMe.css';

export default function AboutMe() {
    return (
        <section className="section about-me">
            <h2 className="section__title">Студент</h2>

            <article className="about-me__card">
                <h3 className="about-me__name">Роман</h3>
                <p className="about-me__info">Фронтенд-разработчик, 32 года</p>
                <img
                    src={photo}
                    alt="Фото разработчика"
                    className="about-me__photo"
                />
                <p className="about-me__description">
                    Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                    С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                    начал заниматься фриланс-заказами и ушёл с постоянной работы.
                </p>
                <address className="about-me__social-links">
                    <Link className="about-me__social-link">GitHub</Link>
                    <Link className="about-me__social-link">Telegram</Link>
                </address>
            </article>

            <aside className="about-me__wrapper">
                <h3 className="about-me__portfolio">Портфолио</h3>
                <div className="about-me__site">
                    <p className="about-me__site-name">Статичный сайт</p>
                    <Link className="about-me__site-link">
                        <img
                            src={arrow}
                            alt="Ссылка на сайт"
                            className="about-me__site-image"
                        />
                    </Link>
                </div>

                <div className="about-me__site">
                    <p className="about-me__site-name">Адаптивный сайт</p>
                    <Link className="about-me__site-link">
                        <img
                            src={arrow}
                            alt="Ссылка на сайт"
                            className="about-me__site-image"
                        />
                    </Link>
                </div>

                <div className="about-me__site">
                    <p className="about-me__site-name">Одностраничное приложение</p>
                    <Link className="about-me__site-link">
                        <img
                            src={arrow}
                            alt="Ссылка на сайт"
                            className="about-me__site-image"
                        />
                    </Link>
                </div>
            </aside>
        </section>
    );
}