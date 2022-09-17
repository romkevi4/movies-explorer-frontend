import React, { useEffect, useContext } from 'react';

import useFormWithValidation from '../../hooks/useFormWithValidation';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import InfoTooltip from '../Popup/InfoTooltip/InfoTooltip';

import './Profile.css';


export default function Profile({
    handleUpdateUser,
    onClickEditProfile,
    onCloseEditProfile,
    isEdit,
    isStatus,
    isStatusPopupOpen,
    textStatus,
    closePopup,
    signOut
}) {
    const {
        values,
        handleChange,
        errors,
        isValid,
        setValues,
        setIsValid
    } = useFormWithValidation();

    const currentUser = useContext(CurrentUserContext);

    const onSubmit = (evt) => {
        evt.preventDefault();
        handleUpdateUser(values);
    }

    useEffect(() => {
        setValues({ name: currentUser.name, email: currentUser.email });
    }, [currentUser]);

    useEffect(() => {
        if (values.name === currentUser.name && values.email === currentUser.email) {
            setIsValid(false);
        }
    }, [values]);


    return (
        <section className="section profile">
            <form
                method="patch"
                onSubmit={onSubmit}
                className="profile__form"
                name="formProfile"
            >
                <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>

                <div className="profile__block">
                    <input
                        type="text"
                        minLength="2"
                        maxLength="40"
                        name="name"
                        placeholder="Имя"
                        value={values.name || ''}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                        className="profile__input"
                        id="profileName"
                    />
                    <label className="profile__label">Имя</label>

                    <input
                        type="text"
                        minLength="6"
                        maxLength="40"
                        name="email"
                        placeholder="Email"
                        value={values.email || ''}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                        pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                        className="profile__input"
                        id="profileEmail"
                    />
                    <label className="profile__label">E-mail</label>
                </div>

                <div className="profile__box">
                    {
                        isEdit
                            ? (
                                <>
                                    <span className="profile__error-text">{isValid ? '' : errors.search}</span>

                                    <button
                                        aria-label="Сохранить данные пользователя"
                                        type="submit"
                                        disabled={!isValid}
                                        className={isValid ? 'profile__btn-save' : 'profile__btn-save profile__btn-save_disable'}
                                    >
                                        Сохранить
                                    </button>

                                    <button
                                        aria-label="Назад"
                                        type="button"
                                        onClick={onCloseEditProfile}
                                        className="profile__btn"
                                    >
                                        Назад
                                    </button>
                                </>
                            )
                            : (
                                <>
                                    <button
                                        aria-label="Редактировать профиль"
                                        type="button"
                                        onClick={onClickEditProfile}
                                        disabled={!isValid}
                                        className={isValid ? 'profile__btn' : 'profile__btn profile__btn_disable'}
                                    >
                                        Редактировать
                                    </button>

                                    <button
                                        aria-label="Выход из аккаунта"
                                        type="submit"
                                        onClick={signOut}
                                        className="profile__btn profile__btn_red"
                                    >
                                        Выйти из аккаунта
                                    </button>
                                </>
                            )
                    }
                </div>
            </form>

            <InfoTooltip
                isOpen={isStatusPopupOpen}
                partOfId="profile-info"
                onClose={closePopup}
                popupClass="infoTooltip"
                isStatus={isStatus}
                textStatus={textStatus}
            />
        </section>
    );
}