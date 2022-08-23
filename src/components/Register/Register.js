import React from 'react';

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
            {/*<div className="register">*/}
            {/*    <p className="register__text">Уже зарегистрированы?</p>*/}

            {/*    <Link to="/signin" className="register__link-auth">Войти</Link>*/}
            {/*</div>*/}
        </AuthForm>
    );
}