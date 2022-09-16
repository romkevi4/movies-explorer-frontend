import React, { useState } from 'react';

import usePageWithMovies from '../../hooks/usePageWithMovies';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { moviesApi } from '../../utils/MoviesApi';
import adjustedMoviesData from '../../utils/adjustedMoviesData';
import { INFORMATION_MESSAGE } from '../../utils/constants';

import './Movies.css';


export default function Movies({
    savedMovies,
    moviesLength,
    handleMovieLike,
    handleMovieRemove,
    addSavedMoviesOnPage,
    outputErrors
}) {
    const [ isPreloader, setIsPreloader ] = useState(false);

    const [ movies, setMovies ] = useState(JSON.parse(localStorage.getItem('movies')) ?? []);
    const {
        isSearchSuccessful,
        setIsSearchSuccessful,
        infoResponse,
        setInfoResponse,
        textSearch,
        checkbox,
        sortMovies,
        updatedMovies,
        handleChangeSearch,
        handleChangeCheckbox
    } = usePageWithMovies(movies, 'textSearch', 'checkbox', 'updatedMovies', getMovies);


    function downloadMovies() {
        setIsPreloader(true);

        moviesApi.getMoviesList()
            .then(res => {
                const adjustedMoviesList = res.map(item => adjustedMoviesData(item));

                setMovies(adjustedMoviesList);
                localStorage.setItem('movies', JSON.stringify(adjustedMoviesList));
            })
            .catch(() => {
                outputErrors(INFORMATION_MESSAGE.REQUEST_ERROR);

                setIsSearchSuccessful(false);
                setInfoResponse(INFORMATION_MESSAGE.REQUEST_ERROR);
            })
            .finally(() => setIsPreloader(false));
    }

    function getMovies() {
        return movies.length === 0 && downloadMovies();
    }


    return (
        <main className="movies">
            <SearchForm
                textSearch={textSearch}
                checkbox={checkbox}
                onChange={handleChangeSearch}
                onChangeCheckbox={handleChangeCheckbox}
            />

            <MoviesCardList
                isPreloader={isPreloader}
                currentMovies={updatedMovies}
                savedMovies={savedMovies}
                moviesLength={moviesLength}
                handleMovieLike={handleMovieLike}
                handleMovieRemove={handleMovieRemove}
                infoResponse={infoResponse}
                isSearchSuccessful={isSearchSuccessful}
                isSavedMoviesPage={false}
            />

            {
                isSearchSuccessful && sortMovies.length > moviesLength
                    && (
                        <button
                            aria-label="Увеличение количества отображаемых фильмов"
                            type="button"
                            onClick={addSavedMoviesOnPage}
                            className="movies__btn-increase"
                        >
                            Ещё
                        </button>
                    )
            }
        </main>
    );
}