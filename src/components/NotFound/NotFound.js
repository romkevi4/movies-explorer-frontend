import React from 'react';

import { INFORMATION_VALUES } from '../../utils/constants';

import './NotFound.css';


export default function NotFound({ goBack }) {
    return (
        <section className="section not-found">
            <h2 className="not-found__title">{INFORMATION_VALUES.ERROR_NOT_FOUND}</h2>
            <p className="not-found__subtitle">Страница не найдена</p>
            <button
                onClick={goBack}
                aria-label="Возвращение на предыдущую страницу"
                type="button"
                className="not-found__btn-back"
            >
                Назад
            </button>
        </section>
    );
}