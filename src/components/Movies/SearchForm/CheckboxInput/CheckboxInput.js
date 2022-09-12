import React from 'react';

import './CheckboxInput.css'


export default function CheckboxInput({ onChecked, onChangeCheckbox, disabledCheckbox }) {
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
                disabled={disabledCheckbox}
                className="checkbox-input__toggle"
            />

            <label className="checkbox-input__signature">Короткометражки</label>
        </div>
    );
}