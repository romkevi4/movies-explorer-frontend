import React from 'react';

import logoPromo from '../../../images/promo/promo-logo.svg'
import './Promo.css';

export default function Promo() {
    return (
        <section className="section promo">
            <div className="promo__container">
                <h1 className="promo__title">
                    Учебный проект студента факультета Веб-разработки.
                </h1>

                <img
                    src={logoPromo}
                    alt="Логотип"
                    className="promo__image"
                />
            </div>
        </section>
    );
}