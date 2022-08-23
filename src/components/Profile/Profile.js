import React from 'react';

import './Profile.css';

export default function Profile() {
    return (
        <section className="section profile">
            <form className="profile__form">
                <h2 className="profile__title">Привет, Роман!</h2>

                <div className="profile__block">
                    <input
                        type="text"
                        minLength="6"
                        maxLength="40"
                        autoComplete="off"
                        name="name"
                        required
                        className="profile__input"
                        id="profileName"
                    />
                    <label className="profile__label">Имя</label>
                </div>

                <div className="profile__block">
                    <input
                        type="text"
                        minLength="6"
                        maxLength="40"
                        name="email"
                        required
                        className="profile__input"
                        id="profileEmail"
                    />
                    <label className="profile__label">E-mail</label>
                </div>

                <div className="profile__box">
                    <span className="profile__error-text">При обновлении профиля произошла ошибка</span>

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
            </form>
        </section>
    );
}