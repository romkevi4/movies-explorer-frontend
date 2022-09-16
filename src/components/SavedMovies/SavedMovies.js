import React from 'react';

import usePageWithMovies from '../../hooks/usePageWithMovies';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.css';


export default function SavedMovies({ savedMovies, moviesLength, handleMovieRemove }) {
    const {
        isSearchSuccessful,
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
                isSearchSuccessful={isSearchSuccessful}
                isSavedMoviesPage
            />
        </main>
    );
}
