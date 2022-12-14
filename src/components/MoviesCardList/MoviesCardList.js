import React, { useContext } from 'react';

import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';

import { AppContext } from '../../contexts/AppContext';

import './MoviesCardList.css';


export default function MoviesCardList({
    isPreloader,
    currentMovies,
    infoResponse,
    isSearchSuccessful,
    isSavedMoviesPage
}) {
    const { moviesLength } = useContext(AppContext);


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
