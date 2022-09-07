import React, { useState, useContext } from 'react';

import { mainApi } from '../../../utils/MainApi';
import Preloader from '../../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';

import { MoviesContext } from '../../../contexts/MoviesContext';

import './MoviesCardList.css';


export default function MoviesCardList({
    updatedMovies,
    isPreloader,
    infoResponse,
    isSearchSuccessful,
    isSavedMoviesPage
}) {
    const [ isLiked, setIsLiked ] = useState(false);
    const movies = useContext(MoviesContext);

    // Нужно брать из локал сторедж
    // const aaaaa = JSON.parse(localStorage.getItem('requestParams'));
    //
    // console.log(aaaaa);

    // const [ textError, setTextError ] = useState('');

    const handleMovieLike = (movie) => {
        setIsLiked(movies.some(item => item.movieId === movie.movieId));

        if (!isLiked) {
            setIsLiked(true);

            console.log(movie);

            mainApi.saveCardMovie(movie)
                .then((savedCardMovie) => {
                    movies.push(savedCardMovie);
                    localStorage.setItem('savedMovies', JSON.stringify(movies));
                })
                .catch(err => console.error(`Ошибка: ${err}`));
        } else {
            setIsLiked(false);
            handleMovieRemove(movie);
        }
    }

    function handleMovieRemove(movie) {
        mainApi.removeCardMovie(movie.movieId) //TODO: проверить нужен movieId или _id?
            .then()
            .catch(err => console.error(`Ошибка: ${err}`));
    }


    return (
        <section className="section movies-card-list">
            <Preloader isPreloader={isPreloader} />

            {
                // TODO: значение isSearchSuccessful true или false в зависимости от результата поиска
                isSearchSuccessful
                    ? (
                        <div className="movies-card-list__block">
                            {
                                updatedMovies.slice(0, 16).map(movie => {
                                    return (
                                        <MoviesCard
                                            movie={movie}
                                            onMovieLike={handleMovieLike}
                                            onMovieRemove={handleMovieRemove}
                                            isLiked={isLiked}
                                            isSavedMoviesPage={isSavedMoviesPage}
                                            key={movie.movieId}
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
