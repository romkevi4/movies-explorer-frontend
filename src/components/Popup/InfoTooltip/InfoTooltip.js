import React from 'react';

import Popup from '../Popup';

import iconCorrect from '../../../images/popup/popup__icon_correct.svg';
import iconError from '../../../images/popup/popup__icon_error.svg';
import './InfoTooltip.css';


export default function InfoTooltip({
    isOpen,
    partOfId,
    onClose,
    popupClass,
    isStatus,
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
                src={isStatus ? iconCorrect : iconError}
                alt="Подсказка"
                className="infoTooltip__icon"
            />

            <p className="infoTooltip__status">
                {textStatus}
            </p>
        </Popup>
    );
}