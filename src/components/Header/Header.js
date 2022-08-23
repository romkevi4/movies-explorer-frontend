import React from 'react';
import { Link } from 'react-router-dom';

import InitialMenu from './InitialMenu/InitialMenu';
import Navigation from './Navigation/Navigation';
import BurgerMenu from './BurgerMenu/BurgerMenu';

import logo from '../../images/header/header-logo.svg';

import './Header.css';


export default function Header({
    goToHome,
    goToRegistration,
    goToMovies,
    goToSavedMovies,
    isBurgerMenuOpen,
    onOpenBurgerMenu,
    onCloseBurgerMenu,
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

                <div className="header__wrapper">
                    { loggedIn
                        ? (
                            <>
                                <div className="header__display-laptop">
                                    <Navigation
                                        goToMovies={goToMovies}
                                        goToSavedMovies={goToSavedMovies}
                                    />
                                </div>

                                <div className="header__display-tablet">
                                    <BurgerMenu
                                        goToHome={goToHome}
                                        goToMovies={goToMovies}
                                        goToSavedMovies={goToSavedMovies}
                                        isBurgerMenuOpen={isBurgerMenuOpen}
                                        onOpenBurgerMenu={onOpenBurgerMenu}
                                        onCloseBurgerMenu={onCloseBurgerMenu}
                                    />
                                </div>
                            </>
                        )
                        : (
                            <InitialMenu
                                goToRegistration={goToRegistration}
                            />

                        )
                    }
                </div>
            </div>
        </header>
    );
}