import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';

// import EditProfilePopup from '../Profile/EditProfilePopup/EditProfilePopup';
import NotFound from '../NotFound/NotFound';
// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import './App.css';


export default function App() {
    // ---------- Переменные состояния ----------
    const [ isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);



    const handleBurgerMenuClick = () => {
        setIsBurgerMenuOpen(true);
    }

    const closeBurgerMenu = () => {
        setIsBurgerMenuOpen(false);
    }

    return (
        <div className="app">
            <div className="app__page">
                <Switch>
                    {/*---------- О проекте ----------*/}
                    <Route exact path="/">
                        <Header
                            goToHome="/"
                            goToRegistration="/signup"
                            goToMovies="/movies"
                            goToSavedMovies="/saved-movies"
                            // goToProfile="/profile"
                            // loggedIn="false"
                        />
                        <Main />
                        <Footer />
                    </Route>

                    {/*---------- Аутентификация ----------*/}
                    <Route path="/signin">
                        <Login />
                    </Route>

                    {/*---------- Регистрация ----------*/}
                    <Route path="/signup">
                        <Register />
                    </Route>

                    {/*---------- Фильмы ----------*/}
                    <Route path="/movies">
                        <Header
                            goToHome="/"
                            goToRegistration="/signup"
                            goToMovies="/movies"
                            goToSavedMovies="/saved-movies"
                            isBurgerMenuOpen={isBurgerMenuOpen}
                            onOpenBurgerMenu={handleBurgerMenuClick}
                            onCloseBurgerMenu={closeBurgerMenu}
                            goToProfile="/profile"
                            loggedIn="true"
                        />
                        <Movies />
                        <Footer />
                    </Route>

                    {/*---------- Сохранённые фильмы ----------*/}
                    <Route path="/saved-movies">
                        <Header
                            goToHome="/"
                            goToRegistration="/signup"
                            goToMovies="/movies"
                            goToSavedMovies="/saved-movies"
                            isBurgerMenuOpen={isBurgerMenuOpen}
                            onOpenBurgerMenu={handleBurgerMenuClick}
                            onCloseBurgerMenu={closeBurgerMenu}
                            goToProfile="/profile"
                            loggedIn="true"
                        />
                        <SavedMovies />
                        <Footer />
                    </Route>

                    {/*---------- Профиль ----------*/}
                    <Route path="/profile">
                        <Header
                            goToHome="/"
                            goToRegistration="/signup"
                            goToMovies="/movies"
                            goToSavedMovies="saved-movies"
                            isBurgerMenuOpen={isBurgerMenuOpen}
                            onOpenBurgerMenu={handleBurgerMenuClick}
                            onCloseBurgerMenu={closeBurgerMenu}
                            goToProfile="/profile"
                            loggedIn="true"
                        />
                        <Profile />
                    </Route>

                    {/*---------- Переадресация ----------*/}
                    {/*<Route path="/">*/}
                    {/*    /!*{loggedIn ? <Redirect to="/movies" /> : <Redirect to="/" />}*!/*/}
                    {/*</Route>*/}

                    {/*---------- Страница не найдена ----------*/}
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}
