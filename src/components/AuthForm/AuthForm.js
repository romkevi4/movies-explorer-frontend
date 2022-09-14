import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import validateEmail from '../../utils/validateEmail';
import { INFORMATION_MESSAGE } from '../../utils/initialData';

import logo from '../../images/header/header-logo.svg';
import './AuthForm.css';

export default function AuthForm({
    goToHome,
    formTitle,
    formBtnText,
    isAuth,
    handleAuth,
    children
}) {
    const [ formParams, setFormParams ] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ isNameValid, setIsNameValid ] = useState(false);
    const [ isEmailValid, setIsEmailValid ] = useState(false);
    const [ isPasswordValid, setIsPasswordValid ] = useState(false);
    const [ isBtnSubmitEnabled, setIsBtnSubmitEnabled ] = useState(false);

    const checks = ['typeMismatch', 'tooShort', 'valueMissing', 'customError'];


    useEffect(() => {
        if (isEmailValid && isPasswordValid && (isNameValid || !isAuth)) {
            setIsBtnSubmitEnabled(true);
        } else {
            setIsBtnSubmitEnabled(false);
        }
    }, [isAuth, isEmailValid, isPasswordValid, isNameValid]);

    const onChange = (evt) => {
        const { name, value } = evt.target;

        setFormParams((previous) => ({
            ...previous,
            [name]: value,
        }));

        if (name === 'email') {
            if (!validateEmail(value)) {
                evt.target.setCustomValidity('invalid email');
            } else {
                evt.target.setCustomValidity('');
            }
        }

        checkValidity(evt);

        if (name === 'name') {
            setName(value);
        }

        if (name === 'email') {
            setEmail(value);
        }

        if (name === 'password') {
            setPassword(value);
        }
    }

    function onSubmit(evt) {
        evt.preventDefault();
        const { name, email, password } = formParams;

        if (isAuth) {
            handleAuth({ name, email, password });
        } else {
            handleAuth({ email, password });
        }
    }

    const checkValidity = (evt) => {
        const { name, validity } = evt.target;

        const checksPassed = checks.filter((check) => validity[check]).length === 0;

        if (name === 'name') {
            setIsNameValid(checksPassed);
        }

        if (name === 'email') {
            setIsEmailValid(checksPassed);
        }

        if (name === 'password') {
            setIsPasswordValid(checksPassed);
        }
    }


    return (
        <div className="auth">
            <form
                method="post"
                onSubmit={onSubmit}
                name="formAuth"
                className="auth__form"
            >
                <Link
                    to={goToHome}
                    className="auth__link-home"
                >
                    <img
                        src={logo}
                        alt="Изображен логотип"
                        className="auth__logo"
                    />
                </Link>

                <p className="auth__title">{formTitle}</p>

                <div
                    className={
                        isAuth
                            ? 'auth__block'
                            : 'auth__block_inactive'
                    }
                >
                    {
                        isAuth
                            ? (
                                <input
                                    type="text"
                                    minLength="2"
                                    maxLength="40"
                                    name="name"
                                    value={name}
                                    onChange={onChange}
                                    required
                                    autoComplete="off"
                                    className="auth__input"
                                    id="authName"
                                />
                            )
                            : (
                                <input
                                    type="text"
                                    minLength="2"
                                    maxLength="40"
                                    name="name"
                                    value={name}
                                    onChange={onChange}
                                    hidden={true}
                                    autoComplete="off"
                                    className="auth__input"
                                    id="authName"
                                />
                            )
                    }
                    <label className="auth__input-label">Имя</label>

                    <span
                        className={
                            !isNameValid && name !== ''
                                ? 'auth__error-text'
                                : 'auth__error-text auth__error-text_inactive'
                        }
                    >
                        {INFORMATION_MESSAGE.NAME_ERROR_MESSAGE}
                    </span>
                </div>

                <div className="auth__block">
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                        autoComplete="off"
                        className="auth__input"
                        id="authEmail"
                    />
                    <label className="auth__input-label">E-mail</label>

                    <span
                        className={
                            !isEmailValid && email !== ''
                                ? 'auth__error-text'
                                : 'auth__error-text auth__error-text_inactive'
                        }
                    >
                        {INFORMATION_MESSAGE.EMAIL_ERROR_MESSAGE}
                    </span>
                </div>

                <div className="auth__block">
                    <input
                        type="password"
                        minLength="5"
                        maxLength="30"
                        name="password"
                        value={password}
                        onChange={onChange}
                        required
                        autoComplete="off"
                        className="auth__input"
                        id="authPassword"
                    />
                    <label className="auth__input-label">Пароль</label>

                    <span
                        className={
                            !isPasswordValid && password !== ''
                                ? 'auth__error-text'
                                : 'auth__error-text auth__error-text_inactive'
                        }
                    >
                        {INFORMATION_MESSAGE.PASSWORD_ERROR_MESSAGE}
                    </span>
                </div>

                <button
                    aria-label={formBtnText}
                    type="submit"
                    disabled={!isBtnSubmitEnabled}
                    className={
                        isBtnSubmitEnabled
                            ? 'auth__btn-submit'
                            : 'auth__btn-submit auth__btn-submit_disable'
                    }
                >
                    {formBtnText}
                </button>
            </form>

            {children}
        </div>
    );
}