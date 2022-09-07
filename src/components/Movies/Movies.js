import React, { useState, useContext } from 'react';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

import searchMovies from '../../utils/searchMovies';
import { INFORMATION_MESSAGE } from '../../utils/initialData';

import { MoviesContext } from '../../contexts/MoviesContext';

import './Movies.css';

export default function Movies({ isPreloader, onMovieLike, onMovieRemove, isLiked }) {
    const movies = useContext(MoviesContext);
    const [ updatedMovies, setUpdatedMovies ] = useState([]);
    const [ requestParams, setRequestParams ] = useState({
        moviesList: [],
        textSearch: '',
        checkbox: false
    });
    const [ isSearchSuccessful, setIsSearchSuccessful ] = useState(undefined);
    const [ infoResponse, setInfoResponse ] = useState('');

    console.log(movies);

    const handleChangeSearch = (evt) => {
        const { name, value } = evt.target;

        setRequestParams((previous) => ({
            ...previous,
            [name]: value
        }));
    }

    const handleChangeCheckbox = (evt) => {
        setRequestParams(() => ({
            ...requestParams,
            checkbox: evt.target.checked
        }));
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        controlRequestParams();
    }

    function controlRequestParams() {
        if (requestParams.textSearch === '') {
            setIsSearchSuccessful(false);
            setInfoResponse(INFORMATION_MESSAGE.REQUEST_TEXT);
        } else {
            const result = searchMovies(movies, requestParams.textSearch, requestParams.checkbox);
            setUpdatedMovies(result);

            setRequestParams(() =>({
                ...requestParams,
                moviesList: result
            }));

            if (result.length === 0) {
                setIsSearchSuccessful(false);
                setInfoResponse(INFORMATION_MESSAGE.NOTHING_FOUND);
            } else {
                setIsSearchSuccessful(true);
            }
        }
    }

    return (
        <main className="movies">
            <SearchForm
                requestParams={requestParams}
                onChange={handleChangeSearch}
                onChangeCheckbox={handleChangeCheckbox}
                onSubmit={handleSubmit}
            />

            <MoviesCardList
                updatedMovies={updatedMovies}
                isPreloader={isPreloader}
                // onMovieLike={onMovieLike}
                // onMovieRemove={onMovieRemove}
                // isLiked={isLiked}
                infoResponse={infoResponse}
                isSearchSuccessful={isSearchSuccessful}
                isSavedMoviesPage={false}
            />

            {/*TODO: добавить активное состояние кнопки*/}
            <button
                aria-label="Увеличение количества отображаемых фильмов"
                type="button"
                className="movies__btn-increase"
            >
                Ещё
            </button>
        </main>
    );
}