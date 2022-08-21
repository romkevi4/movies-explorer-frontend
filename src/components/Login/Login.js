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
            <p className="auth__text">
                Ещё не зарегистрированы?
                <Link to="/signup" className="auth__link-auth">Регистрация</Link>
            </p>
        </AuthForm>
    );
}