import React from 'react';

import arrow from '../../../images/search/search-arrow.svg';

import './SearchForm.css';

export default function SearchForm() {
    return (
        <section className="section search">
            <form className="search__form">
                <input
                    type="search"
                    placeholder="Фильм"
                    required
                    className="search__input"
                />
                <button
                    type="submit"
                    className="search__btn-submit"
                >
                    <img
                        src={arrow}
                        alt="Стрелка в строке поиска"
                        className="search__image-arrow"
                    />
                </button>

                <div className="search__wrapper">
                    <input
                        type="checkbox"
                        required
                        className="search__checkbox"
                    />

                    <label className="search__signature">Короткометражки</label>
                </div>
            </form>
        </section>
    );
}