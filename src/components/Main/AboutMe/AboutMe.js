import React from 'react';

import { EXTERNAL_RESOURCES } from '../../../utils/constants';

import photo from '../../../images/about-me/about-me-photo.jpg';
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
                    Я живу в Москве, закончил энергетический ВУЗ, но моё призвание - это программирование.
                    У меня есть любимые жена и дочка. Я люблю слушать музыку, играю на гитаре. Недавно начал
                    кодить и прошёл курс по веб-разработке. Хочу развиваться именно в программировании.
                </p>
                <address className="about-me__social-links">
                    <a
                        href={EXTERNAL_RESOURCES.GITHUB}
                        className="about-me__social-link"
                        target="_blank"
                    >
                        GitHub
                    </a>

                    <a
                        href={EXTERNAL_RESOURCES.TELEGRAM}
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
                            href={EXTERNAL_RESOURCES.RUSSIAN_TRAVEL}
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
                            href={EXTERNAL_RESOURCES.RUSSIAN_TRAVEL}
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
                            href={EXTERNAL_RESOURCES.MESTO}
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