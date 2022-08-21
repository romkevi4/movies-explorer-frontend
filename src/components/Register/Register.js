import React from 'react';
import { Link } from 'react-router-dom';

import AuthForm from '../AuthForm/AuthForm';

import './Register.css';

export default function Register() {
    return (
        <AuthForm
            goToHome="/"
            formTitle="Добро пожаловать!"
            formBtnText="Зарегистрироваться"
            blockInactive=""
        >
            <p className="auth__text">
                Уже зарегистрированы?
                <Link to="/signin" className="auth__link-auth">Войти</Link>
            </p>
        </AuthForm>
    );
}