import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { auth } from '../../utils/Auth';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import adjustedMoviesData from '../../utils/adjustedMoviesData';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';

// import EditProfilePopup from '../Profile/EditProfilePopup/EditProfilePopup';
import InfoTooltip from '../Popup/InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import NotFound from '../NotFound/NotFound';

// TODO: нужен ли контекст сохраненных фильмов? Перенесены функции в MoviesCardList
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { MoviesContext } from '../../contexts/MoviesContext';

import './App.css';


export default function App() {
    //=============================== Взаимодействие компонентов ===============================
    // ---------- Переменные состояния ----------
    const [ currentUser, setCurrentUser ] = useState({});

    const [ isPreloader, setIsPreloader ] = useState(false);
    const [ movies, setMovies ] = useState([]);
    const [ savedMovies, setSavedMovies ] = useState([]);

    const [ isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
    const [ loggedIn, setLoggedIn ] = useState(undefined);
    // const [ isLiked, setIsLiked ] = useState(false);

    const [ isAuthStatusPopupOpen, setIsAuthStatusPopupOpen ] = useState(false);

    const history = useHistory();

    // ---------- Управление авторизацией и регистрацией ----------
    const handleRegister = ({ name, email, password }) => {
        auth.userRegistration(name, email, password)
            .then(() => setAutoLogin(email, password))
            .catch(err => {
                setIsAuthStatusPopupOpen(true);
                outputErrors(err)
            });
    }

    const handleLogin = ({ email, password }) => setAutoLogin(email, password);

    function setAutoLogin(email, password) {
        auth.userAuthorization(email, password)
            .then(data => {
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    checkToken();
                }
            })
            .catch(err => {
                setIsAuthStatusPopupOpen(true);
                outputErrors(err)
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
        setMovies([]);
        localStorage.clear();
        // localStorage.removeItem('savedMovies');
        history.push('/');
    }


    // ---------- Управление данными пользователя ----------
    function getSavedUser() {
        mainApi.getUserData()
            .then(res => setCurrentUser(res))
            .catch(err => outputErrors(err));
    }

    const handleUpdateUser = (objectWithUserData) => {
        return mainApi.saveUserData(objectWithUserData)
            .then(res => setCurrentUser(res))
            .catch(err => outputErrors(err));
    }


    // ---------- Управление данными фильмов ----------
    function downloadMovies() {
        setIsPreloader(true);

        moviesApi.getMoviesList()
            .then(res => {
                const adjustedMoviesList = res.map(item => adjustedMoviesData(item));

                setMovies(adjustedMoviesList);
                localStorage.setItem('movies', JSON.stringify(adjustedMoviesList));
            })
            .catch(err => outputErrors(err))
            .finally(() => setIsPreloader(false));
    }


    function getSavedMovies() {
        mainApi.getSavedMoviesData()
            .then(res => setSavedMovies(res))
            .catch(err => outputErrors(err));
    }

    useEffect(() => {
        const loadingMovies = localStorage.getItem('movies');

        if (loadingMovies) {
            try {
                const moviesList = JSON.parse(loadingMovies);
                setMovies(moviesList);
            } catch (err) {
                localStorage.removeItem('movies');
                downloadMovies();
            }
        } else {
            downloadMovies();
        }
    }, []);

    // const handleMovieLike = (movie) => {
    //     setIsLiked(savedMovies.some(item => item.movieId === movie.movieId));
    //
    //     if (!isLiked) {
    //         setIsLiked(true);
    //
    //         mainApi.saveCardMovie(movie)
    //             .then((savedCardMovie) => {
    //                 setSavedMovies(savedCardMovie);
    //                 localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    //             })
    //             .catch(err => outputErrors(err));
    //     } else {
    //         setIsLiked(false);
    //         handleMovieRemove(movie);
    //     }
    // }
    //
    // function handleMovieRemove(movie) {
    //     mainApi.removeCardMovie(movie._id) //TODO: проверить нужен movieId или _id?
    //         .then(() => getSavedMovies())
    //         .catch(err => outputErrors(err));
    // }


    // ---------- Управление данными бургер-меню ----------
    const handleBurgerMenuClick = () => {
        setIsBurgerMenuOpen(true);
    }

    const closeBurgerMenu = () => {
        setIsBurgerMenuOpen(false);
    }

    const handleGoBack = () => history.goBack();

    // ---------- Управление попапами ----------
    const closePopup = () => {
        setIsAuthStatusPopupOpen(false);
    }

    // ---------- Валидация форм ----------


    // ---------- Вывод ошибок в консоль ----------
    function outputErrors(err) {
        return console.error(`Ошибка: ${err}`);
    }


    // =============================== Рендеринг компонентов ===============================
    return (
        <CurrentUserContext.Provider value={currentUser}>
            <MoviesContext.Provider value={movies}>
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
                                <Register handleRegister={handleRegister} />

                                <InfoTooltip
                                    isOpen={isAuthStatusPopupOpen}
                                    partOfId="auth-info"
                                    onClose={closePopup}
                                    popupClass="infoTooltip"
                                />
                            </Route>

                            {/*---------- Аутентификация ----------*/}
                            <Route path="/signin">
                                <Login handleLogin={handleLogin}/>

                                <InfoTooltip
                                    isOpen={isAuthStatusPopupOpen}
                                    partOfId="auth-info"
                                    onClose={closePopup}
                                    popupClass="infoTooltip"
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
                                        isPreloader={isPreloader}
                                        // onMovieLike={handleMovieLike}
                                        // onMovieRemove={handleMovieRemove}
                                        // isLiked={isLiked}
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
                                    movies={movies}
                                    isPreloader={isPreloader}
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
            </MoviesContext.Provider>
        </CurrentUserContext.Provider>
    );
}
