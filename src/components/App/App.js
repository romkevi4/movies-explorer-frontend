import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { auth } from '../../utils/Auth';

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

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './App.css';


export default function App() {
    // ---------- Переменные состояния ----------
    const [ currentUser, setCurrentUser ] = useState({});

    const [ isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
    const [ loggedIn, setLoggedIn ] = useState(false);
    const [ authStatus, setAuthStatus ] = useState(false);

    const [ cards, setCards ] = useState([]);
    const history = useHistory();


    // ---------- Управление авторизацией и регистрацией ----------
    const handleRegister = ({ name, email, password }) => {
        return auth.userRegistration(name, email, password)
            .then(() => {
                setAuthStatus(true);
                history.push('/sugnin');
            })
            .catch(err => {
                setAuthStatus(false);
                console.error(`Ошибка: ${err}`);
            });
    }

    const handleLogin = ({ email, password }) => {
        return auth.userAuthorization(email, password)
            .then(data => {
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    tokenCheck();
                }
            })
            .catch(err => {
                setAuthStatus(false);
                console.error(`Ошибка: ${err}`);
            })
    }

    function tokenCheck() {
        let token = localStorage.getItem(('token'));

        if (token) {
            auth.validityCheck(token)
                .then(res => res.data)
                .then(data => {
                    if (data) {
                        let userData = {
                            name: data.name,
                            email: data.email,
                            _id: data._id
                        }

                        setLoggedIn(true);
                        setCurrentUser(userData);
                    }
                })
        }
    }

    const goBack = () => {
        history.goBack();
    }

    const signOut = () => {
        localStorage.removeItem('token');
        setLoggedIn(false);
        setAuthStatus(false);
        history.push('/');
    }

    // ---------- Управление данными бургер-меню ----------
    const handleBurgerMenuClick = () => {
        setIsBurgerMenuOpen(true);
    }

    const closeBurgerMenu = () => {
        setIsBurgerMenuOpen(false);
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="app">
                <div className="app__page">
                    <Switch>
                        {/*---------- О проекте ----------*/}
                        <Route exact path="/">
                            <Header
                                goToHome="/"
                                goToRegistration="/signup"
                                goToLogin="/signin"
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
                            <Login handleLogin={handleLogin}/>
                        </Route>

                        {/*---------- Регистрация ----------*/}
                        <Route path="/signup">
                            <Register handleRegister={handleRegister} />
                        </Route>

                        {/*---------- Фильмы ----------*/}
                        <Route path="/movies">
                            <Header
                                goToHome="/"
                                goToRegistration="/signup"
                                goToLogin="/signin"
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
                                // goToProfile="/profile"
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
                            <NotFound goBack={goBack} />
                        </Route>
                    </Switch>
                </div>
            </div>
        </CurrentUserContext.Provider>
    );
}
