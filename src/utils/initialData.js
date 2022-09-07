// =============================== Блок исходной информации ===============================
// Адрес удаленного сервера
export const authenticationData = {
    // serverAddress: `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`
    serverAddress: 'http://localhost:3001'
}

// Адрес сервера с фильмами от BeatfilmMoviesApi
export const beatfilmMoviesApi = {
    serverAddress: 'https://api.nomoreparties.co/beatfilm-movies'
}

// Тексты сообщений
export const INFORMATION_MESSAGE = {
    REQUEST_TEXT: 'Нужно ввести ключевое слово',
    NOTHING_FOUND: 'Ничего не найдено',
    REQUEST_ERROR: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
}
