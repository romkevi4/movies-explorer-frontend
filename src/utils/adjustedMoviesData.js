import defaultImage from '../images/movies-card/default-image.jpg';

export default function adjustedMoviesData(movie) {
    const {
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        id,
        nameRU,
        nameEN
    } = movie;

    return {
        country: country || 'Нет информации',
        director: director || 'Нет информации',
        duration: duration || 0,
        year: year || 'Нет информации',
        description: description || 'Нет описания',
        image: `https://api.nomoreparties.co${image.url}` || defaultImage,
        trailerLink,
        thumbnail : thumbnail || `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
        movieId: id,
        nameRU: nameRU || 'Без названия',
        nameEN: nameEN || 'Untitled'
    };
}
