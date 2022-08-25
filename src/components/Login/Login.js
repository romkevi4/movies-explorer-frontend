import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AuthForm from '../AuthForm/AuthForm';

import './Login.css';

export default function Login({ handleLogin }) {
    const [ formParams, setFormParams ] = useState({
        email: '',
        password: ''
    });

    const handleChange = (evt) => {
        const { name, value} = evt.target;
        setFormParams((previous) => ({
            ...previous,
            [name]: value
        }));
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleLogin(formParams);
    }


    return (
        <AuthForm
            goToHome="/"
            formTitle="Рады видеть!"
            formBtnText="Войти"
            blockInactive="auth__block_inactive"
            formParams={formParams}
            onChange={handleChange}
            onSubmit={handleSubmit}
        >
            <div className="auth__wrapper">
                <p className="auth__text">Ещё не зарегистрированы?</p>
                <Link to="/signup" className="auth__link-auth">Регистрация</Link>
            </div>
        </AuthForm>
    );
}