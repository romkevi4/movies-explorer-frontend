import { authenticationData } from './initialData';


// =============================== Формирование класса Auth для работы с собственным API ===============================
class Auth {
    constructor({ serverAddress }) {
        this._baseUrl = serverAddress;
    }

    // Проверка ответа сервера
    _processResponseAuth(res) {
        if (res.ok) {
            return res.json();
        }

        return res.json()
            .then((data) => {
                throw new Error(data.message[0].message);
            });
    }

    // Регистрация пользователя
    userRegistration(nameData, emailData, passwordData) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameData,
                password: passwordData,
                email: emailData
            })
        })
            .then(this._processResponseAuth);
    }

    // Авторизация пользователя
    userAuthorization(emailData, passwordData) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                password: passwordData,
                email: emailData
            })
        })
            .then(this._processResponseAuth);
    }

    // Проверка валидности токена
    validityCheck(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                authorization : `Bearer ${token}`
            }
        })
            .then(this._processResponseAuth);
    }
}

export const auth = new Auth(authenticationData);