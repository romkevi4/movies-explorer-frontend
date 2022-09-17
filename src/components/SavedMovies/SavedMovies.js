import React, { useContext } from 'react';

import usePageWithMovies from '../../hooks/usePageWithMovies';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { AppContext } from '../../contexts/AppContext';

import './SavedMovies.css';


export default function SavedMovies() {
    const { savedMovies, moviesLength, handleMovieRemove } = useContext(AppContext);
    const {
        isSearchSuccessful,
        infoResponse,
        textSearch,
        checkbox,
        updatedMovies,
        handleChangeSearch,
        handleChangeCheckbox
    } = usePageWithMovies(savedMovies, '', '', 'savedMovies');


    return (
        <main className="savedMovies">
            <SearchForm
                textSearch={textSearch}
                checkbox={checkbox}
                onChange={handleChangeSearch}
                onChangeCheckbox={handleChangeCheckbox}
                disabledCheckbox={!textSearch}
            />

            <MoviesCardList
                currentMovies={updatedMovies}
                savedMovies={savedMovies}
                moviesLength={moviesLength}
                handleMovieRemove={handleMovieRemove}
                infoResponse={infoResponse}
                isSearchSuccessful={isSearchSuccessful}
                isSavedMoviesPage
            />
        </main>
    );
}
