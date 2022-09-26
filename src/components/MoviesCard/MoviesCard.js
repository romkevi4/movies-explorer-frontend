import React, { useContext } from 'react';

import { AppContext } from '../../contexts/AppContext';

import './MoviesCard.css';


export default function MoviesCard({ movie, isSavedMoviesPage }) {
    const { savedMovies, handleMovieLike, handleMovieRemove } = useContext(AppContext);

    function onMovieLike() {
        handleMovieLike(movie);
    }

    function onMovieRemove() {
        handleMovieRemove(movie);
    }

    let isLiked = savedMovies.some(item => item.movieId === movie.movieId);
    const movieLikeBtnClassName = (
        isLiked
            ? 'movies-card__btn movies-card__btn_active'
            : 'movies-card__btn'
    );


    return (
        <article className="movies-card">
            <div className="movies-card__info">
                <a href={movie.trailerLink} target="_blank">
                    <img
                        src={movie.image}
                        alt={movie.nameRU === 'Без названия' ? movie.nameEN : movie.nameRU}
                        className="movies-card__poster"
                    />
                </a>

                <div className="movies-card__wrapper">
                    <h4 className="movies-card__name">{movie.nameRU === 'Без названия' ? movie.nameEN : movie.nameRU}</h4>

                    <button
                        aria-label="Кнопка лайк-удаление"
                        type="button"
                        onClick={isSavedMoviesPage ? onMovieRemove : onMovieLike}
                        className={
                            isSavedMoviesPage
                                ? 'movies-card__btn movies-card__btn_remove'
                                : movieLikeBtnClassName
                        }
                    />
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