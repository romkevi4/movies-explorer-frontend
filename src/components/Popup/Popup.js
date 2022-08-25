import React from 'react';

import './Popup.css';

export default function Popup({children}) {
    return (
        <div className="popup popup_opened">
            <div className="popup__container">
                {children}
                <button
                    aria-label="Закрыть"
                    type="button"
                    className="popup__btn-close"
                />
            </div>
        </div>
    );
}