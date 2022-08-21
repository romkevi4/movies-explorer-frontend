import React from 'react';

import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

import './SavedMovies.css';

export default function SavedMovies() {
    return (
        <div className="savedMovies">
            <SearchForm />
            <MoviesCardList />
        </div>
    );
}
