import React from 'react';
import { Link } from 'react-router-dom';

import './InitialMenu.css';


export default function InitialMenu({ goToRegistration }) {
    return (
        <div className="initial-menu">
            <Link
                to={goToRegistration}
                // onClick={handleSignOut}
                className="initial-menu__link-registration"
            >
                Регистрация
            </Link>

            <button
                aria-label="Вход в аккаунт"
                type="button"
                className="initial-menu__btn-login"
            >
                Войти
            </button>
        </div>
    );
}