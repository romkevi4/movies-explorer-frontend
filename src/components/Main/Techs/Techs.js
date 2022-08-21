import React from 'react';

import './Techs.css';

export default function Techs() {
    return (
        <section className="section techs">
            <h2 className="section__title">Технологии</h2>

            <h3 className="techs__title">7 технологий</h3>
            <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии,
                которые применили в дипломном проекте.
            </p>

            <div className="techs__cards">
                <div className="techs__card">
                    <p className="techs__text">HTML</p>
                </div>

                <div className="techs__card">
                    <p className="techs__text">CSS</p>
                </div>

                <div className="techs__card">
                    <p className="techs__text">JS</p>
                </div>

                <div className="techs__card">
                    <p className="techs__text">React</p>
                </div>

                <div className="techs__card">
                    <p className="techs__text">Git</p>
                </div>

                <div className="techs__card">
                    <p className="techs__text">Express.js</p>
                </div>

                <div className="techs__card">
                    <p className="techs__text">mongoDB</p>
                </div>
            </div>
        </section>
    );
}