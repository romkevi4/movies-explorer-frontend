import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AuthForm from '../AuthForm/AuthForm';

import './Register.css';

export default function Register({ handleRegister }) {
    const [ formParams, setFormParams ] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormParams((previous) => ({
            ...previous,
            [name]: value
        }));
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleRegister(formParams);
    }

    return (
        <AuthForm
            goToHome="/"
            formTitle="Добро пожаловать!"
            formBtnText="Зарегистрироваться"
            blockInactive=""
            formParams={formParams}
            isInactive={false}
            onChange={handleChange}
            onSubmit={handleSubmit}
        >
            <div className="auth__wrapper">
                <p className="auth__text">Уже зарегистрированы?</p>
                <Link to="/signin" className="auth__link-auth">Войти</Link>
            </div>
        </AuthForm>
    );
}