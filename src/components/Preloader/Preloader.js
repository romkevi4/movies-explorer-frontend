import React from 'react';

import './Preloader.css';

export default function Preloader({ isPreloader }) {
    return (
        <div className={isPreloader ? 'loader loader_active' : 'loader'}>
            <div className="loader__container">
                <div className="loader__face">
                    <div className="loader__circle"></div>
                </div>

                <div className="loader__face">
                    <div className="loader__circle"></div>
                </div>

                <div className="loader__face">
                    <div className="loader__circle"></div>
                </div>
            </div>
        </div>
    );
}