import React, { useState } from 'react';

import usePageWithMovies from '../../hooks/usePageWithMovies';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

import { moviesApi } from '../../utils/MoviesApi';
import adjustedMoviesData from '../../utils/adjustedMoviesData';
import { INFORMATION_MESSAGE } from '../../utils/initialData';

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
    // const [ isSearchSuccessful, setIsSearchSuccessful ] = useState(false);
    // const [ infoResponse, setInfoResponse ] = useState('');


    const [ movies, setMovies ] = useState(JSON.parse(localStorage.getItem('movies')) ?? []);
    const {
        isSearchSuccessful,
        setIsSearchSuccessful,
        infoResponse,
        setInfoResponse,
        textSearch,
        checkbox,
        updatedMovies,
        handleChangeSearch,
        handleChangeCheckbox
    } = usePageWithMovies(movies, 'textSearch', 'checkbox', 'updatedMovies', getMovies);
    // const [ textSearch, setTextSearch ] = useState(localStorage.getItem('textSearch') ?? '');
    // const [ checkbox, setCheckbox ] = useState(JSON.parse(localStorage.getItem('checkbox')) ?? false);
    //
    // const sortMovies = useSortMovies(movies, textSearch, checkbox);
    // const [ updatedMovies, setUpdatedMovies ] = useState(JSON.parse(localStorage.getItem('updatedMovies')) ?? sortMovies);

    // const handleChangeSearch = (text) => {
    //     getMovies();
    //
    //     setTextSearch(text);
    //     localStorage.setItem('textSearch', text);
    // }
    //
    // const handleChangeCheckbox = (checked) => {
    //     setCheckbox(checked);
    //     localStorage.setItem('checkbox', checked);
    // }

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

    // useEffect(() => {
    //     if (movies.length && !sortMovies.length) {
    //         setIsSearchSuccessful(false);
    //         setInfoResponse(INFORMATION_MESSAGE.NOTHING_FOUND);
    //     }
    // }, [movies.length, sortMovies.length]);
    //
    // useEffect(() => {
    //     if (updatedMovies !== sortMovies && sortMovies.length) {
    //         setIsSearchSuccessful(true);
    //
    //         setUpdatedMovies(sortMovies);
    //         localStorage.setItem('updatedMovies', JSON.stringify(sortMovies));
    //     }
    // }, [sortMovies, updatedMovies, sortMovies.length]);


    return (
        <main className="movies">
            <SearchForm
                textSearch={textSearch}
                checkbox={checkbox}
                onChange={handleChangeSearch}
                onChangeCheckbox={handleChangeCheckbox}
                disabledCheckbox={!textSearch}
            />

            <MoviesCardList
                isPreloader={isPreloader}
                currentMovies={updatedMovies}
                savedMovies={savedMovies}
                moviesLength={moviesLength}
                // onMovieLike={onMovieLike}
                // isLiked={isLiked}
                handleMovieLike={handleMovieLike}
                handleMovieRemove={handleMovieRemove}
                infoResponse={infoResponse}
                isSearchSuccessful={isSearchSuccessful}
                isSavedMoviesPage={false}
            />

            {/*TODO: добавить активное состояние кнопки*/}
            <button
                aria-label="Увеличение количества отображаемых фильмов"
                type="button"
                onClick={addSavedMoviesOnPage}
                className="movies__btn-increase"
            >
                Ещё
            </button>
        </main>
    );
}