import React, { useEffect } from 'react';

import './Popup.css';

export default function Popup({
        isOpen,
        partOfId,
        onClose,
        popupClass,
        children
    }) {
    
    useEffect(() => {
        if (!isOpen) return;

        const closeByEscape = (evt) => {
            if (evt.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', closeByEscape);

        return () => document.removeEventListener('keydown', closeByEscape);

    }, [isOpen, onClose]);

    const handleOverlay = (evt) => {
        if (evt.target === evt.currentTarget) {
            onClose();
        }
    }


    return (
        <div
            className={`popup ${isOpen ? 'popup_opened' : ''}`}
            id={`popup-${partOfId}`}
            onClick={handleOverlay}
        >
            <div className={`popup__container ${popupClass}`}>
                {children}
                <button
                    onClick={onClose}
                    aria-label="Закрыть"
                    type="button"
                    className="popup__btn-close"
                />
            </div>
        </div>
    );
}