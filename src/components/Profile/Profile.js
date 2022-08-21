import React from 'react';

import './Profile.css';

export default function Profile() {
    return (
        <section className="section profile">
            <div className="profile__container">
                <h2 className="profile__title">Привет, Роман!</h2>

                <div className="profile__block">
                    <p className="profile__name-title">Имя</p>
                    <p className="profile__name">Роман</p>
                </div>

                <div className="profile__block">
                    <p className="profile__name-title">E-mail</p>
                    <p className="profile__name">example@example.ru</p>
                </div>

                <button
                    aria-label="Редактирование профиля"
                    type="button"
                    className="profile__btn"
                >
                    Редактировать
                </button>

                <button
                    aria-label="Выход из аккаунта"
                    type="button"
                    className="profile__btn profile__btn_red"
                >
                    Выйти из аккаунта
                </button>
            </div>
        </section>
    );
}