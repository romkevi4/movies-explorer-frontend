import React from 'react';
import { Link } from 'react-router-dom';

import AuthForm from '../AuthForm/AuthForm';


export default function Login({ handleLogin }) {
    return (
        <AuthForm
            goToHome="/"
            formTitle="Рады видеть!"
            formBtnText="Войти"
            isAuth={false}
            handleAuth={handleLogin}
        >
            <div className="auth__wrapper">
                <p className="auth__text">Ещё не зарегистрированы?</p>
                <Link to="/signup" className="auth__link-auth">Регистрация</Link>
            </div>
        </AuthForm>
    );
}