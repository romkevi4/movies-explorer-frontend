export default function searchMovies(moviesList, textSearch, checkbox) {
    const nameList = moviesList.map(item => item.nameRU);
    const shortFilmList = moviesList.map(item => item.duration <= 40);

    // console.log(moviesList);
    // console.log(textSearch);
    // console.log(checkbox);

    const resultSearch = moviesList.filter(item => item.nameRU.toLowerCase().includes(textSearch.toLowerCase()));

    if (!checkbox) {
        return resultSearch;
    } else {
        return resultSearch.filter(item => item.duration <= 40)
    }
}