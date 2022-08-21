import React from 'react';

import './BurgerMenu.css';

export default function BurgerMenu() {
    return (
        <div className="header__tablet">
            <button
                aria-label="Меню навигации"
                type="button"
                className="header__btn-burger"
            />
        </div>
    );
}