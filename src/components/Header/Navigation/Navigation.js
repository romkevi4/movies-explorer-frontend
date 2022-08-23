import React from 'react';
import { NavLink } from 'react-router-dom';

import iconAccount from '../../../images/header/header-icon-account.svg';

import './Navigation.css';

export default function Navigation({ goToMovies, goToSavedMovies }) {
    return (
        <div className="navigation">
            <nav className="navigation__nav">
                <NavLink
                    exact
                    to={goToMovies}
                    // onClick={handleSignOut}
                    className="navigation__link-movies"
                    activeClassName="navigation__link-movies_active"
                >
                    Фильмы
                </NavLink>

                <NavLink
                    to={goToSavedMovies}
                    // onClick={handleSignOut}
                    className="navigation__link-movies"
                    activeClassName="navigation__link-movies_active"
                >
                    Сохранённые фильмы
                </NavLink>
            </nav>

            <button
                aria-label="Переход к редактированию аккаунта"
                type="button"
                className="navigation__btn-account"
            >
                <img
                    src={iconAccount}
                    alt="Иконка аккаунта"
                    className="navigation__icon-account"
                />

                <p className="navigation__title-account">Аккаунт</p>
            </button>
        </div>
    );
}