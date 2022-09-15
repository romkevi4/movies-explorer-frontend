import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import useCurrentWidthScreen from '../../hooks/useCurrentWidthScreen';

import { auth } from '../../utils/Auth';
import { mainApi } from '../../utils/MainApi';
import { INFORMATION_MESSAGE } from '../../utils/initialData';

import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

import InfoTooltip from '../Popup/InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import NotFound from '../NotFound/NotFound';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './App.css';


export default function App() {
    //=============================== Взаимодействие компонентов ===============================
    // ---------- Переменные состояния ----------
    const [ currentUser, setCurrentUser ] = useState({});

    const [ savedMovies, setSavedMovies ] = useState(JSON.parse(localStorage.getItem('savedMovies')) ?? []);
    const [ moviesLength, setMoviesLength ] = useState(16);
    const [ amountOfMovies, setAmountOfMovies ] = useState(4);
    const width = useCurrentWidthScreen();

    const [ isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
    const [ loggedIn, setLoggedIn ] = useState(undefined);

    const [ isEdit, setIsEdit ] = useState(false);

    const [ isStatus, setIsStatus ] = useState(false);
    const [ isStatusPopupOpen, setIsStatusPopupOpen ] = useState(false);
    const [ textStatus, setTextStatus ] = useState('');

    const history = useHistory();


    // ---------- Управление авторизацией и регистрацией ----------
    const handleRegister = ({ name, email, password }) => {
        auth.userRegistration(name, email, password)
            .then(() => setAutoLogin(email, password))
            .catch(err => {
                setIsStatusPopupOpen(true);
                outputErrors(err);
            });
    }

    const handleLogin = ({ email, password }) => setAutoLogin(email, password);

    function setAutoLogin(email, password) {
        auth.userAuthorization(email, password)
            .then(data => {
                console.log(data);
                console.log(data.token);

                if (data.token) {
                    localStorage.setItem('token', data.token);
                    checkToken();
                }
            })
            .catch(err => {
                setIsStatusPopupOpen(true);
                outputErrors(err);
            });
    }

    function checkToken() {
        let token = localStorage.getItem('token');

        if (token) {
            auth.validityCheck(token)
                .then(res => {
                    if (res) {
                        let userData = {
                            name: res.name,
                            email: res.email,
                            _id: res._id
                        }

                        setLoggedIn(true);
                        setCurrentUser(userData);
                        history.push('/movies');
                    }
                })
                .catch(err => outputErrors(err));
        }
    }

    useEffect(() => {
        checkToken();
    }, []);

    useEffect(() => {
        if (loggedIn) {
            mainApi.setToken();

            getSavedUser();
            getSavedMovies();
        }
    }, [loggedIn])

    // Выход из аккаунта
    const handleSignOut = () => {
        setLoggedIn(undefined);
        setCurrentUser({});
        localStorage.clear();
        history.push('/');
    }


    // ---------- Управление данными пользователя ----------
    function getSavedUser() {
        mainApi.getUserData()
            .then(data => setCurrentUser(data))
            .catch(err => outputErrors(err));
    }

    const handleUpdateUser = (objectWithUserData) => {
        return mainApi.saveUserData(objectWithUserData)
            .then(data => {
                setCurrentUser(data);
                setIsEdit(false);
                setIsStatus(true);
                setTextStatus(INFORMATION_MESSAGE.OK);
            })
            .catch(err => {
                outputErrors(err);
                setIsStatus(false);
                setTextStatus(INFORMATION_MESSAGE.REPEAT);
            })
            .finally(() => {
                setIsStatusPopupOpen(true);
            });
    }

    function onClickEditProfile() {
        return setIsEdit(true);
    }


    // ---------- Управление данными фильмов ----------
    function getSavedMovies() {
        mainApi.getSavedMoviesData()
            .then(data => {
                if (data) {
                    setSavedMovies(data);
                    localStorage.setItem('savedMovies', JSON.stringify(data));
                }
            })
            .catch(err => outputErrors(err));
    }

    function saveMovie(movie) {
        mainApi.saveCardMovie(movie)
            .then(data => {
                setSavedMovies([ ...savedMovies, data]);
                localStorage.setItem('savedMovies', JSON.stringify([ ...savedMovies, data]));
            })
            .catch(err => outputErrors(err));
    }

    const handleMovieLike = (movie) => {
        const isLiked = savedMovies.some(item => item.movieId === movie.movieId);

        if (!isLiked) {
            saveMovie(movie);
        } else {
            const moviesIsDisliked = savedMovies.find(item => item.movieId === movie.movieId);
            handleMovieRemove(moviesIsDisliked);
        }
    }

    function handleMovieRemove(movie) {
        mainApi.removeCardMovie(movie)
            .then((data) => {
                const adjustedSavedMovies = savedMovies.filter(item => item._id !== data._id);

                setSavedMovies(adjustedSavedMovies);
                localStorage.setItem('savedMovies', JSON.stringify(adjustedSavedMovies));
            })
            .catch(err => outputErrors(err));
    }


    // ---------- Управление карточками фильмов ----------
    useEffect(() => {
        if (width >= 1267) {
            setMoviesLength(16);
            setAmountOfMovies(4);
        } else if (width < 1267) {
            setMoviesLength(12);
            setAmountOfMovies(3);
        } else if (width < 945) {
            setMoviesLength(8);
            setAmountOfMovies(2);
        } else if (width < 619) {
            setMoviesLength(5);
            setAmountOfMovies(1);
        }
    }, [width]);

    function addSavedMoviesOnPage() {
        setMoviesLength(moviesLength + amountOfMovies);
    }


    // ---------- Управление данными бургер-меню ----------
    const handleBurgerMenuClick = () => {
        setIsBurgerMenuOpen(true);
    }

    const closeBurgerMenu = () => {
        setIsBurgerMenuOpen(false);
    }


    // ---------- Управление попапами ----------
    const closePopup = () => {
        setIsStatusPopupOpen(false);
    }


    // ---------- Вывод ошибок в консоль ----------
    function outputErrors(err) {
        return console.error(`Ошибка: ${err}`);
    }


    // ---------- Возвращение на предыдущую страницу ----------
    const handleGoBack = () => history.goBack();


    // =============================== Рендеринг компонентов ===============================
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
                                goToProfile="/profile"
                                isBurgerMenuOpen={isBurgerMenuOpen || false}
                                onOpenBurgerMenu={handleBurgerMenuClick || false}
                                onCloseBurgerMenu={closeBurgerMenu || false}
                                loggedIn={loggedIn}
                                bgStyle
                            />

                            <Main />

                            <Footer />
                        </Route>

                        {/*---------- Регистрация ----------*/}
                        <Route path="/signup">
                            <Register
                                handleRegister={handleRegister}
                                outputErrors={outputErrors}
                            />

                            <InfoTooltip
                                isOpen={isStatusPopupOpen}
                                partOfId="auth-info"
                                onClose={closePopup}
                                popupClass="infoTooltip"
                                isStatus={false}
                                textStatus={INFORMATION_MESSAGE.REPEAT}
                            />
                        </Route>

                        {/*---------- Аутентификация ----------*/}
                        <Route path="/signin">
                            <Login
                                handleLogin={handleLogin}
                                outputErrors={outputErrors}
                            />

                            <InfoTooltip
                                isOpen={isStatusPopupOpen}
                                partOfId="auth-info"
                                onClose={closePopup}
                                popupClass="infoTooltip"
                                isStatus={false}
                                textStatus={INFORMATION_MESSAGE.REPEAT}
                            />
                        </Route>

                        {/*---------- Фильмы ----------*/}
                            <ProtectedRoute
                                path="/movies"
                                loggedIn={loggedIn}
                            >
                                <Header
                                    goToHome="/"
                                    goToRegistration="/signup"
                                    goToLogin="/signin"
                                    goToMovies="/movies"
                                    goToSavedMovies="/saved-movies"
                                    goToProfile="/profile"
                                    isBurgerMenuOpen={isBurgerMenuOpen}
                                    onOpenBurgerMenu={handleBurgerMenuClick}
                                    onCloseBurgerMenu={closeBurgerMenu}
                                    loggedIn={loggedIn}
                                    bgStyle={false}
                                />

                                <Movies
                                    savedMovies={savedMovies}
                                    moviesLength={moviesLength}
                                    handleMovieLike={handleMovieLike}
                                    handleMovieRemove={handleMovieRemove}
                                    addSavedMoviesOnPage={addSavedMoviesOnPage}
                                    outputErrors={outputErrors}
                                />

                                <Footer />
                            </ProtectedRoute>

                        {/*---------- Сохранённые фильмы ----------*/}
                        <ProtectedRoute
                            path="/saved-movies"
                            loggedIn={loggedIn}
                        >
                            <Header
                                goToHome="/"
                                goToRegistration="/signup"
                                goToLogin="/signin"
                                goToMovies="/movies"
                                goToSavedMovies="/saved-movies"
                                goToProfile="/profile"
                                isBurgerMenuOpen={isBurgerMenuOpen}
                                onOpenBurgerMenu={handleBurgerMenuClick}
                                onCloseBurgerMenu={closeBurgerMenu}
                                loggedIn={loggedIn}
                                bgStyle={false}
                            />

                            <SavedMovies
                                savedMovies={savedMovies}
                                moviesLength={moviesLength}
                                handleMovieRemove={handleMovieRemove}
                            />

                            <Footer />
                        </ProtectedRoute>

                        {/*---------- Профиль ----------*/}
                        <ProtectedRoute
                            path="/profile"
                            loggedIn={loggedIn}
                        >
                            <Header
                                goToHome="/"
                                goToRegistration="/signup"
                                goToLogin="/signin"
                                goToMovies="/movies"
                                goToSavedMovies="/saved-movies"
                                goToProfile="/profile"
                                isBurgerMenuOpen={isBurgerMenuOpen}
                                onOpenBurgerMenu={handleBurgerMenuClick}
                                onCloseBurgerMenu={closeBurgerMenu}
                                loggedIn={loggedIn}
                                bgStyle={false}
                            />

                            <Profile
                                handleUpdateUser={handleUpdateUser}
                                onClickEditProfile={onClickEditProfile}
                                isEdit={isEdit}
                                isStatus={isStatus}
                                isStatusPopupOpen={isStatusPopupOpen}
                                textStatus={textStatus}
                                closePopup={closePopup}
                                signOut={handleSignOut}
                            />
                        </ProtectedRoute>

                        {/*---------- Страница не найдена ----------*/}
                        <Route path="*">
                            <NotFound goBack={handleGoBack} />
                        </Route>
                    </Switch>
                </div>
            </div>
        </CurrentUserContext.Provider>
    );
}
