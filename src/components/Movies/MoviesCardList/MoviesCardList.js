import React from 'react';

import Preloader from '../../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';


export default function MoviesCardList({
    isPreloader,
    currentMovies,
    savedMovies,
    moviesLength,
    handleMovieLike,
    handleMovieRemove,
    infoResponse,
    isSearchSuccessful,
    isSavedMoviesPage
}) {
    return (
        <section className="section movies-card-list">
            <Preloader isPreloader={isPreloader} />

            {
                isSearchSuccessful
                    ? (
                        <div className="movies-card-list__block">
                            {
                                currentMovies.slice(0, moviesLength).map(movie => {
                                    return (
                                        <MoviesCard
                                            movie={movie}
                                            savedMovies={savedMovies}
                                            handleMovieLike={handleMovieLike}
                                            handleMovieRemove={handleMovieRemove}
                                            isSavedMoviesPage={isSavedMoviesPage}
                                            key={movie.id ? movie.id : movie.movieId}
                                        />
                                    );
                                })
                            }
                        </div>
                    )
                    : (
                        <span className="movies-card-list__err-request">{infoResponse}</span>
                    )
            }
        </section>
    );
}
