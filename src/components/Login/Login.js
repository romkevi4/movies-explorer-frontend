import React from 'react';
import { Link } from 'react-router-dom';

import AuthForm from '../AuthForm/AuthForm';

import './Login.css';

export default function Login() {
    return (
        <AuthForm
            goToHome="/"
            formTitle="Рады видеть!"
            formBtnText="Войти"
            blockInactive="auth__block_inactive"
        >
            <div className="auth__wrapper">
                <p className="auth__text">Ещё не зарегистрированы?</p>
                <Link to="/signup" className="auth__link-auth">Регистрация</Link>
            </div>
        </AuthForm>
    );
}