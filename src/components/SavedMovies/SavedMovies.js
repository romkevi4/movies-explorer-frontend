import React from 'react';

import usePageWithMovies from '../../hooks/usePageWithMovies';

import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

import './SavedMovies.css';


export default function SavedMovies({ savedMovies, moviesLength, handleMovieRemove }) {
    const {
        isSearchSuccessful,
        textSearch,
        checkbox,
        updatedMovies,
        handleChangeSearch,
        handleChangeCheckbox
    } = usePageWithMovies(savedMovies, 'savedTextSearch', 'savedCheckbox', 'savedMovies');


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
