// =============================== Блок исходной информации ===============================
// Адрес удаленного сервера
export const authenticationData = {
    serverAddress: `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`
    // serverAddress: '//localhost:3001'
}

// Адрес сервера с фильмами от BeatfilmMoviesApi
export const beatfilmMoviesApi = {
    serverAddress: 'https://api.nomoreparties.co/beatfilm-movies'
}

// Тексты сообщений
export const INFORMATION_MESSAGE = {
    REQUEST_TEXT: 'Нужно ввести ключевое слово',
    NOTHING_FOUND: 'Ничего не найдено',
    REQUEST_ERROR: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
    REPEAT: 'Что-то пошло не так! Попробуйте ещё раз.',
    OK: 'Все прошло успешно!',
    NAME_ERROR_MESSAGE: 'Длина имени должна быть не менее 2 символов',
    EMAIL_ERROR_MESSAGE: 'E-mail должен быть корректным',
    PASSWORD_ERROR_MESSAGE: 'Длина пароля должна быть не менее 5 символов'
}
