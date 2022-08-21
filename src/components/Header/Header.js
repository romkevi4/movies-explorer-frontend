import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../images/header/header-logo.svg';
import iconAccount from '../../images/header/header-icon-account.svg';

import './Header.css';


export default function Header({
    goToHome,
    goToRegistration,
    goToMovies,
    goToSavedMovies,
    goToProfile,
    loggedIn
}) {

    return (
        <header className={`header ${loggedIn ? '' : 'header_background_active'}`}>
            <div className="header__container">
                <Link
                    to={goToHome}
                    // onClick={handleSignOut}
                    className="header__link-about-project"
                >
                    <img
                        src={logo}
                        alt="Изображен логотип"
                        className="header__logo"
                    />
                </Link>

                <div className={`header__wrapper ${loggedIn ? '' : 'header__wrapper_position_right'}`}>
                    { loggedIn
                        ? (
                            <>
                                <div className="header__laptop">
                                    <nav className="header__nav">
                                        <NavLink
                                            exact
                                            to={goToMovies}
                                            // onClick={handleSignOut}
                                            className="header__link-movies header__link-movies_active"
                                            activeClassName="header__link-movies_active"
                                        >
                                            Фильмы
                                        </NavLink>

                                        <NavLink
                                            to={goToSavedMovies}
                                            // onClick={handleSignOut}
                                            className="header__link-movies"
                                            activeClassName="header__link-movies_active"
                                        >
                                            Сохранённые фильмы
                                        </NavLink>
                                    </nav>

                                    <button
                                        aria-label="Переход к редактированию аккаунта"
                                        type="button"
                                        className="header__btn-account"
                                    >
                                        <img
                                            src={iconAccount}
                                            alt="Иконка аккаунта"
                                            className="header__icon-account"
                                        />

                                        <p className="header__title-account">Аккаунт</p>
                                    </button>
                                </div>

                                <div className="header__tablet">
                                    <button
                                        aria-label="Меню навигации"
                                        type="button"
                                        className="header__btn-burger"
                                    />
                                </div>
                            </>
                        )
                        : (
                            <>
                                <Link
                                    to={goToRegistration}
                                    // onClick={handleSignOut}
                                    className="header__link-registration"
                                >
                                    Регистрация
                                </Link>

                                <button
                                    aria-label="Вход в аккаунт"
                                    type="button"
                                    className="header__btn-login"
                                >
                                    Войти
                                </button>
                            </>
                        )
                    }
                </div>
            </div>
        </header>
    );
}