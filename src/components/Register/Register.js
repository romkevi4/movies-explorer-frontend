import React from 'react';

import AuthForm from '../AuthForm/AuthForm';

import './Register.css';
import {Link} from "react-router-dom";

export default function Register() {
    return (
        <AuthForm
            goToHome="/"
            formTitle="Добро пожаловать!"
            formBtnText="Зарегистрироваться"
            blockInactive=""
        >
            <div className="auth__wrapper">
                <p className="auth__text">Уже зарегистрированы?</p>
                <Link to="/signin" className="auth__link-auth">Войти</Link>
            </div>
        </AuthForm>
    );
}