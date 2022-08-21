import React from 'react';

import './AboutProject.css';

export default function AboutProject() {
    return (
        <section className="section about-project">
            <h2 className="section__title">О проекте</h2>

            <div className="about-project__stage">
                <article className="about-project__wrapper">
                    <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__text">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности
                        и финальные доработки.
                    </p>
                </article>

                <article className="about-project__wrapper">
                    <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
                        чтобы успешно защититься.
                    </p>
                </article>
            </div>

            <div className="about-project__block">
                <div className="about-project__first-box about-project__first-box_background_color">
                    <p className="about-project__term about-project__term_color_black">1 неделя</p>
                </div>

                <div className="about-project__second-box about-project__first-box_background_grey">
                    <p className="about-project__term">4 недели</p>
                </div>
            </div>

            <div className="about-project__block">
                <div className="about-project__first-box">
                    <p className="about-project__info">Back-end</p>
                </div>

                <div className="about-project__second-box">
                    <p className="about-project__info">Front-end</p>
                </div>
            </div>
        </section>
    );
}