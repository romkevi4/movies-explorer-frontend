import React from 'react';

import Popup from '../../Popup/Popup';

import './EditPropfilePopup.css';

export default function EditProfilePopup() {
    return (
        <Popup>
            <form action="" className="edit-profile-form">
                <h2 className="edit-profile-form__title">Привет, Роман!</h2>

                <div className="edit-profile-form__block">
                    <input
                        type="text"
                        minLength="6"
                        maxLength="40"
                        autoComplete="off"
                        name="name"
                        required
                        className="edit-profile-form__input"
                        id="profileName"
                    />
                    <label className="edit-profile-form__label">Имя</label>
                </div>

                <div className="edit-profile-form__block">
                    <input
                        type="text"
                        minLength="6"
                        maxLength="40"
                        name="email"
                        required
                        className="edit-profile-form__input"
                        id="profileEmail"
                    />
                    <label className="edit-profile-form__label">E-mail</label>
                </div>

                <span className="edit-profile-form__error-text">При обновлении профиля произошла ошибка</span>

                <button
                    aria-label="Сохранить"
                    type="submit"
                    className="edit-profile-form__btn-save"
                >
                    Сохранить
                </button>
            </form>
        </Popup>
    );
}