import React from 'react';

import iconError from '../../../images/popup/popup__icon_error.svg';

import Popup from '../Popup';

import './InfoTooltip.css';

export default function InfoTooltip({
    isOpen,
    partOfId,
    onClose,
    popupClass,
    textStatus
}) {
    return (
        <Popup
            isOpen={isOpen}
            partOfId={partOfId}
            onClose={onClose}
            popupClass={popupClass}
        >
            <img
                src={iconError}
                alt="Подсказка"
                className="infoTooltip__icon"
            />
            <p className="infoTooltip__status">
                {textStatus}
            </p>
        </Popup>
    );
}