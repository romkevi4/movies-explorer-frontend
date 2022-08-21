import React from 'react';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

import './Movies.css';

export default function Movies() {
    return (
        <div className="movies">
            <SearchForm />
            <MoviesCardList />
            <button
                aria-label="Увеличение количества отображаемых фильмов"
                type="button"
                className="movies__btn-increase"
            >
                Ещё
            </button>
        </div>
    );
}