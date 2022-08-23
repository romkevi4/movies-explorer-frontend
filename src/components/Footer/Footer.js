import React from 'react';
import { Link } from 'react-router-dom';

import { TELEGRAM, GITHUB, YANDEX_PRACTIKUM } from '../../utils/externalResources';

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
                    <Link
                        to={YANDEX_PRACTIKUM}
                        className="footer__link"
                        target="_blank"
                    >
                        Яндекс.Практикум
                    </Link>

                    <Link
                        to={GITHUB}
                        className="footer__link"
                        target="_blank"
                    >
                        GitHub
                    </Link>

                    <Link
                        to={TELEGRAM}
                        className="footer__link"
                        target="_blank"
                    >
                        Telegram
                    </Link>
                </address>
            </div>
        </footer>
    );
}