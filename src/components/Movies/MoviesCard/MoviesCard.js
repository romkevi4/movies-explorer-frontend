import React from 'react';

// import poster from '../../../images/movies-card/pic__COLOR_pic.png';

import './MoviesCard.css';

export default function MoviesCard({
    movie,
    onMovieLike,
    onMovieRemove,
    isLiked,
    isSavedMoviesPage,
    key
}) {
    function handleLikeClick() {
        onMovieLike(movie);
    }

    function handleRemoveClick() {
        onMovieRemove(movie);
    }

    // function convertTime() {
    //     console.log(movie);
    //     console.log(movie.duration);
    //
    //     return `${Math.trunc(movie.duration / 60)}ч ${movie.duration % 60}м`;
    // }

    return (
        <article className="movies-card">
            <div className="movies-card__info">
                <img
                    src={movie.image}
                    alt="Постер фильма"
                    className="movies-card__poster"
                />

                <div className="movies-card__wrapper">
                    <h4 className="movies-card__name">{movie.nameRU || movie.nameEN}</h4>
                    {
                        isSavedMoviesPage
                            ? (
                                <button
                                    aria-label="Кнопка для удаления"
                                    type="button"
                                    onClick={handleRemoveClick}
                                    className="movies-card__btn movies-card__btn_remove"
                                />
                            )
                            : (
                                <button
                                    aria-label="Кнопка для лайка"
                                    type="button"
                                    onClick={handleLikeClick}
                                    className={
                                        isLiked
                                            ? 'movies-card__btn movies-card__btn_active'
                                            : 'movies-card__btn'
                                    }
                                />
                            )
                    }
                </div>
            </div>

            <span className="movies-card__duration">
                {
                    `${Math.trunc(movie.duration / 60)}ч ${movie.duration % 60}м`
                }
            </span>
        </article>
    );
}