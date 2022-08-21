import React from 'react';
import { Link } from "react-router-dom";

import logo from '../../images/header/header-logo.svg';

import './AuthForm.css';

export default function AuthForm({
    goToHome,
    formTitle,
    formBtnText,
    blockInactive,
    children
}) {

    return (
        <div className="auth">
            <form className="auth__form">
                <Link
                    to={goToHome}
                    // onClick={handleSignOut}
                    className="auth__link-home"
                >
                    <img
                        src={logo}
                        alt="Изображен логотип"
                        className="auth__logo"
                    />
                </Link>

                <p className="auth__title">{formTitle}</p>

                <div className={`auth__block ${blockInactive}`}>
                    <input
                        type="text"
                        minLength="6"
                        maxLength="40"
                        name="name"
                        required
                        className="auth__input"
                        id="authName"
                    />
                    <label className="auth__input-label">Имя</label>
                    {/*<span className="auth__error-text">Что-то пошло не так...</span>*/}
                </div>

                <div className="auth__block">
                    <input
                        type="email"
                        minLength="6"
                        maxLength="40"
                        autoComplete="off"
                        name="email"
                        required
                        className="auth__input"
                        id="authEmail"
                    />
                    <label className="auth__input-label">E-mail</label>
                    {/*<span className="auth__error-text">Что-то пошло не так...</span>*/}
                </div>

                <div className="auth__block">
                    <input
                        type="password"
                        minLength="2"
                        maxLength="40"
                        autoComplete="off"
                        name="password"
                        required
                        className="auth__input"
                        id="authPassword"
                    />
                    <label className="auth__input-label">Пароль</label>
                    <span className="auth__error-text">Что-то пошло не так...</span>
                </div>

                <button
                    aria-label={formBtnText}
                    type="submit"
                    className="auth__btn-submit"
                >
                    {formBtnText}
                </button>
            </form>

            {children}
        </div>
    );
}