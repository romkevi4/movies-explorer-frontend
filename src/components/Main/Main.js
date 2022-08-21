import React from 'react';

import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';

import './Main.css';

export default function Main() {
    return (
        <>
            <Promo />

            <main className="main">
                <AboutProject />
                <Techs />
                <AboutMe />
            </main>
        </>
    );
}