import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>

            <div className="footer__box">
                <time className="footer__date">
                    &#169; {new Date().getFullYear()}
                </time>

                <address className="footer__links">
                    <Link className="footer__link">Яндекс.Практикум</Link>
                    <Link className="footer__link">GitHub</Link>
                    <Link className="footer__link">Telegram</Link>
                </address>
            </div>
        </footer>
    );
}