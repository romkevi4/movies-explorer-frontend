import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

import './BurgerMenu.css';

export default function BurgerMenu({
    goToHome,
    goToMovies,
    goToSavedMovies,
    isBurgerMenuOpen,
    onOpenBurgerMenu,
    onCloseBurgerMenu
}) {
    return (
        <div className="burger-menu">
            <button
                aria-label="Меню навигации"
                type="button"
                onClick={onOpenBurgerMenu}
                className="burger-menu__btn"
            />

            <div className={`burger-menu__navigation ${isBurgerMenuOpen ? 'burger-menu__navigation_active' : ''}`}
            >
                <Link
                    to={goToHome}
                    // onClick={handleSignOut}
                    className="burger-menu__link-home"
                >
                    Главная
                </Link>

                <Navigation
                    goToMovies={goToMovies}
                    goToSavedMovies={goToSavedMovies}
                />

                <button
                    aria-label="Закрыть"
                    type="button"
                    onClick={onCloseBurgerMenu}
                    className="burger-menu__btn-close"
                />
            </div>
        </div>
    );
}