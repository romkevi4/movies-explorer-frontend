import React from 'react';
import { Link } from 'react-router-dom';

import './InitialMenu.css';


export default function InitialMenu({ goToRegistration, goToLogin }) {
    return (
        <div className="initial-menu">
            <Link
                to={goToRegistration}
                className="initial-menu__link-registration"
            >
                Регистрация
            </Link>

            <Link to={goToLogin} >
                <button
                    aria-label="Вход в аккаунт"
                    type="button"
                    className="initial-menu__btn-login"
                >
                    Войти
                </button>
            </Link>
        </div>
    );
}