import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

import './BurgerMenu.css';

export default function BurgerMenu({
    goToHome,
    goToMovies,
    goToSavedMovies,
    goToProfile,
    isOpen,
    onOpen,
    onClose
}) {
    return (
        <div className="burger-menu">
            <button
                aria-label="Меню навигации"
                type="button"
                onClick={onOpen}
                className="burger-menu__btn"
            />

            <div
                className={
                    isOpen
                        ? 'burger-menu__navigation burger-menu__navigation_active'
                        : 'burger-menu__navigation'
                }
            >
                <Link
                    to={goToHome}
                    className="burger-menu__link-home"
                >
                    Главная
                </Link>

                <Navigation
                    goToMovies={goToMovies}
                    goToSavedMovies={goToSavedMovies}
                    goToProfile={goToProfile}
                />

                <button
                    aria-label="Закрыть"
                    type="button"
                    onClick={onClose}
                    className="burger-menu__btn-close"
                />
            </div>
        </div>
    );
}