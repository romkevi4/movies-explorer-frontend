import React, { useState, useContext } from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Profile.css';

export default function Profile({ handleUpdateUser, signOut }) {
    const currentUser = useContext(CurrentUserContext);
    const [ formParams, setFormParams ] = useState({
        name: currentUser.name,
        email: currentUser.email
    });

    const onChange = (evt) => {
        const { name, value } = evt.target;
        setFormParams((previous) => ({
            ...previous,
            [name]: value
        }));
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        handleUpdateUser(formParams);
    }

    return (
        <section className="section profile">
            <form
                method="patch"
                onSubmit={onSubmit}
                className="profile__form"
                name="formProfile"
            >
                <h2 className="profile__title">{`Привет, ${formParams.name}!`}</h2>

                <div className="profile__block">
                    <input
                        type="text"
                        minLength="6"
                        maxLength="40"
                        autoComplete="off"
                        name="name"
                        value={formParams.name || ''}
                        onChange={onChange}
                        required
                        className="profile__input"
                        id="profileName"
                    />
                    <label className="profile__label">Имя</label>

                    <input
                        type="text"
                        minLength="6"
                        maxLength="40"
                        name="email"
                        value={formParams.email || ''}
                        onChange={onChange}
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
                        type="submit"
                        className="profile__btn"
                    >
                        Редактировать
                    </button>

                    <button
                        onClick={signOut}
                        aria-label="Выход из аккаунта"
                        type="submit"
                        className="profile__btn profile__btn_red"
                    >
                        Выйти из аккаунта
                    </button>
                </div>
            </form>
        </section>
    );
}