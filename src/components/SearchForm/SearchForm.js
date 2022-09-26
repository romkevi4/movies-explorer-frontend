import React, { useState, useEffect } from 'react';

import useFormWithValidation from '../../hooks/useFormWithValidation';

import InfoTooltip from '../Popup/InfoTooltip/InfoTooltip';
import CheckboxInput from './CheckboxInput/CheckboxInput';

import { INFORMATION_MESSAGE } from '../../utils/constants';

import arrow from '../../images/search/search-arrow.svg';
import './SearchForm.css';

export default function SearchForm({ textSearch, checkbox, onChange, onChangeCheckbox }) {
    const {
        values,
        handleChange,
        isValid,
        errors,
        setErrors
    } = useFormWithValidation();
    const [ isOpen, setIsOpen ] = useState(false);


    function onClose() {
        setIsOpen(false);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();

        if (isValid) {
            onChange(values.search);
        } else if (!isValid && (values.search === '' || textSearch === '')) {
            setIsOpen(true);
        }
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
                    name="search"
                    placeholder={isValid ? '' : errors.search}
                    defaultValue={textSearch}
                    onChange={handleChange}
                    required
                    autoComplete="off"
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
                />

                <InfoTooltip
                    isOpen={isOpen}
                    partOfId="search-info"
                    onClose={onClose}
                    popupClass="infoTooltip"
                    isStatus={false}
                    textStatus={INFORMATION_MESSAGE.REQUEST_TEXT}
                />
            </form>
        </section>
    );
}