import React from 'react';

import { TELEGRAM, GITHUB, RUSSIAN_TRAVEL, MESTO } from '../../../utils/externalResources';

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
                    <a
                        href={GITHUB}
                        className="about-me__social-link"
                        target="_blank"
                    >
                        GitHub
                    </a>

                    <a
                        href={TELEGRAM}
                        className="about-me__social-link"
                        target="_blank"
                    >
                        Telegram
                    </a>
                </address>
            </article>

            <aside className="about-me__wrapper">
                <ul className="about-me__portfolio">
                    Портфолио

                    <li className="about-me__site">
                        <a
                            href={RUSSIAN_TRAVEL}
                            className="about-me__site-link"
                            target="_blank"
                        >
                            <p className="about-me__site-name">Статичный сайт</p>

                            <img
                                src={arrow}
                                alt="Ссылка на сайт"
                                className="about-me__site-image"
                            />
                        </a>
                    </li>

                    <li className="about-me__site">
                        <a
                            href={RUSSIAN_TRAVEL}
                            className="about-me__site-link"
                            target="_blank"
                        >
                            <p className="about-me__site-name">Адаптивный сайт</p>

                            <img
                                src={arrow}
                                alt="Ссылка на сайт"
                                className="about-me__site-image"
                            />
                        </a>
                    </li>

                    <li className="about-me__site">
                        <a
                            href={MESTO}
                            className="about-me__site-link"
                            target="_blank"
                        >
                            <p className="about-me__site-name">Одностраничное приложение</p>

                            <img
                                src={arrow}
                                alt="Ссылка на сайт"
                                className="about-me__site-image"
                            />
                        </a>
                    </li>
                </ul>
            </aside>
        </section>
    );
}