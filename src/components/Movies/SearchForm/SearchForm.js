import React from 'react';

import arrow from '../../../images/search/search-arrow.svg';

import './SearchForm.css';

export default function SearchForm({ requestParams, onChange, onChangeCheckbox, onSubmit }) {
    localStorage.setItem('requestParams', JSON.stringify(requestParams));

    // console.log(JSON.parse(localStorage.getItem('requestParams')));

    // function setValueOfParams() {
    //     return JSON.parse(localStorage.getItem('requestParams'));
    // }

    return (
        <section className="section search">
            <form
                onSubmit={onSubmit}
                noValidate
                className="search__form"
            >
                <input
                    type="search"
                    minLength="2"
                    name="textSearch"
                    placeholder="Фильм"
                    value={requestParams.textSearch || ''}
                    onChange={onChange}
                    required
                    className="search__input"
                    id="searchMovies"
                />
                {/*<span className="search__error-text"></span>*/}

                <button
                    aria-label="Отправка формы"
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
                        name="checkbox"
                        checked={requestParams.checkbox}
                        onChange={onChangeCheckbox}
                        required
                        className="search__checkbox"
                    />

                    <label className="search__signature">Короткометражки</label>
                </div>
            </form>
        </section>
    );
}