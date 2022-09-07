import { authenticationData } from './initialData';


// =============================== Формирование класса Api для работы с собственным API ===============================
class MainApi {
    constructor({ serverAddress }) {
        this._baseUrl = serverAddress;
    }

    // Получение токена из localStorage
    setToken() {
        this._token = localStorage.getItem('token');
    }

    // Проверка ответа сервера
    _processResponseData(res) {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Что-то пошло не так, ошибка: ${res.status}`);
    }

    // Запрос получения данных пользователя с сервера
    getUserData() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${this._token}`
            },
            credentials: 'include'
        })
            .then(this._processResponseData);
    }

    // Запрос сохранения измененных данных пользователя
    saveUserData(objectWithUserData) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${this._token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: objectWithUserData.name,
                email: objectWithUserData.email
            }),
            credentials: 'include'
        })
            .then(this._processResponseData);
    }

    // Запрос получения всех сохранённых карточек с фильмами с сервера
    getSavedMoviesData() {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${this._token}`
            },
            credentials: 'include'
        })
            .then(this._processResponseData);
    }

    // Запрос сохранения карточки фильма на сервере
    saveCardMovie(objectWithMovieData) {
        return fetch(`${this._baseUrl}/movies/${objectWithMovieData.movieId}`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${this._token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                country: objectWithMovieData.country,
                director: objectWithMovieData.director,
                duration: objectWithMovieData.duration,
                year: objectWithMovieData.year,
                description: objectWithMovieData.description,
                image: objectWithMovieData.image,
                trailerLink: objectWithMovieData.trailerLink,
                thumbnail: objectWithMovieData.thumbnail,
                movieId: objectWithMovieData.movieId,
                trailer: objectWithMovieData.trailer,
                nameRU: objectWithMovieData.nameRU,
                nameEN: objectWithMovieData.nameEN
            }),
            credentials: 'include'
        })
            .then(this._processResponseData);
    }

    // Запрос удаления карточки фильма с сервера
    removeCardMovie(movieId) {
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${this._token}`
            },
            credentials: 'include'
        })
            .then(this._processResponseData);
    }
}

// Запросы серверу
export const mainApi = new MainApi(authenticationData);