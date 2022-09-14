import React from 'react';

import './CheckboxInput.css'


export default function CheckboxInput({ onChecked, onChangeCheckbox }) {
    function onChange(evt) {
        onChangeCheckbox(evt.target.checked);
    }

    return (
        <div className="checkbox-input">
            <input
                type="checkbox"
                name="checkbox"
                defaultChecked={onChecked}
                onChange={onChange}
                className="checkbox-input__toggle"
            />

            <label className="checkbox-input__signature">Короткометражки</label>
        </div>
    );
}