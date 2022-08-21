import React from 'react';

import poster from '../../../images/movies-card/pic__COLOR_pic.png';

import './MoviesCard.css';

export default function MoviesCard() {
    return (
        <article className="movies-card">
            <div className="movies-card__info">
                <h4 className="movies-card__name">33 слова о дизайне</h4>

                <img
                    src={poster}
                    alt="Постер фильма"
                    className="movies-card__poster"
                />

                <button
                    aria-label="Кнопка"
                    type="button"
                    className="movies-card__btn movies-card__btn_remove"
                />
            </div>

            <span className="movies-card__duration">1ч 42м</span>
        </article>
    );
}