import React, { useState, useEffect } from 'react';

import useFormWithValidation from '../../../hooks/useFormWithValidation';

import InfoTooltip from '../../Popup/InfoTooltip/InfoTooltip';
import CheckboxInput from './CheckboxInput/CheckboxInput';

import { INFORMATION_MESSAGE } from '../../../utils/initialData';

import arrow from '../../../images/search/search-arrow.svg';
import './SearchForm.css';

export default function SearchForm({ textSearch, checkbox, onChange, onChangeCheckbox, disabledCheckbox }) {
    const {
        values,
        handleChange,
        isValid,
        errors,
        setErrors
    } = useFormWithValidation();
    const [ isAuthStatusPopupOpen, setIsAuthStatusPopupOpen ] = useState(false);


    function onClose() {
        setIsAuthStatusPopupOpen(false);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        isValid ? onChange(values.search) : setIsAuthStatusPopupOpen(true);
    }

    useEffect(() => {
        setErrors({ search: "Фильм" })
    }, []);


    return (
        <section className="section search">
            <form
                onSubmit={onSubmit}
                noValidate
                className="search__form"
            >
                <input
                    type="search"
                    minLength="2"
                    name="search"
                    placeholder={isValid ? '' : errors.search}
                    defaultValue={textSearch}
                    onChange={handleChange}
                    required
                    className="search__input"
                    id="searchMovies"
                />

                <button
                    aria-label="Отправка формы"
                    type="submit"
                    className="search__btn-submit"
                >
                    <img
                        src={arrow}
                        alt="Иконка в виде стрелки в строке поиска"
                        className="search__image-arrow"
                    />
                </button>

                <CheckboxInput
                    onChecked={checkbox}
                    onChangeCheckbox={onChangeCheckbox}
                    disabledCheckbox={disabledCheckbox}
                />

                <InfoTooltip
                    isOpen={isAuthStatusPopupOpen}
                    partOfId="auth-info"
                    onClose={onClose}
                    popupClass="infoTooltip"
                    textStatus={INFORMATION_MESSAGE.REQUEST_TEXT}
                />
            </form>
        </section>
    );
}