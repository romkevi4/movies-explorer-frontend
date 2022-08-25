import React from 'react';

import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

import './SavedMovies.css';

export default function SavedMovies() {
    return (
        <main className="savedMovies">
            <SearchForm />
            <MoviesCardList />
        </main>
    );
}
