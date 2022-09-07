import { beatfilmMoviesApi } from './initialData';


// =============================== Формирование класса MoviesApi для работы со сторонним API ===============================
class MoviesApi {
    constructor({serverAddress}) {
        this._baseUrl = serverAddress;
    }

    // Проверка ответа сервера
    _processResponseData(res) {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Что-то пошло не так, ошибка: ${res.status}`);
    }

    // Получение данных фильмов
    getMoviesList() {
        return fetch(`${this._baseUrl}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(this._processResponseData);
    }
}

export const moviesApi = new MoviesApi(beatfilmMoviesApi);