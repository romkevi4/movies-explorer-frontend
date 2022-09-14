import React from 'react';
import { Link } from 'react-router-dom';

import AuthForm from '../AuthForm/AuthForm';


export default function Register({ handleRegister }) {
    return (
        <AuthForm
            goToHome="/"
            formTitle="Добро пожаловать!"
            formBtnText="Зарегистрироваться"
            isAuth
            handleAuth={handleRegister}
        >
            <div className="auth__wrapper">
                <p className="auth__text">Уже зарегистрированы?</p>
                <Link to="/signin" className="auth__link-auth">Войти</Link>
            </div>
        </AuthForm>
    );
}