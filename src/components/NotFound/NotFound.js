import React from 'react';

import './NotFound.css';

export default function NotFound({ goBack }) {
    return (
        <section className="section not-found">
            <h2 className="not-found__title">404</h2>
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