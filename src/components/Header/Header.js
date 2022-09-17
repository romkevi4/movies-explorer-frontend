import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import InitialMenu from './InitialMenu/InitialMenu';
import Navigation from './Navigation/Navigation';
import BurgerMenu from './BurgerMenu/BurgerMenu';

import { AppContext } from '../../contexts/AppContext';

import logo from '../../images/header/header-logo.svg';
import './Header.css';


export default function Header({
    goToHome,
    goToRegistration,
    goToLogin,
    goToMovies,
    goToSavedMovies,
    goToProfile,
    isBurgerMenuOpen,
    onOpenBurgerMenu,
    onCloseBurgerMenu,
    // loggedIn,
    bgStyle
}) {
    const { loggedIn } = useContext(AppContext);

    return (
        <header className={bgStyle ? 'header' : 'header header_background_inactive'}>
            <div className="header__container">
                <Link
                    to={goToHome}
                    className="header__link-about-project"
                >
                    <img
                        src={logo}
                        alt="Изображен логотип"
                        className="header__logo"
                    />
                </Link>

                <div className="header__wrapper">
                    { loggedIn
                        ? (
                            <>
                                <div className="header__display-laptop">
                                    <Navigation
                                        goToMovies={goToMovies}
                                        goToSavedMovies={goToSavedMovies}
                                        goToProfile={goToProfile}
                                    />
                                </div>

                                <div className="header__display-tablet">
                                    <BurgerMenu
                                        goToHome={goToHome}
                                        goToMovies={goToMovies}
                                        goToSavedMovies={goToSavedMovies}
                                        goToProfile={goToProfile}
                                        isOpen={isBurgerMenuOpen}
                                        onOpen={onOpenBurgerMenu}
                                        onClose={onCloseBurgerMenu}
                                    />
                                </div>
                            </>
                        )
                        : (
                            <InitialMenu
                                goToRegistration={goToRegistration}
                                goToLogin={goToLogin}
                            />

                        )
                    }
                </div>
            </div>
        </header>
    );
}