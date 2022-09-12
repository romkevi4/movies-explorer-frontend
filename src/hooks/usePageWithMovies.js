import React, { useState, useEffect } from 'react';

import useSortMovies from './useSortMovies';

import { INFORMATION_MESSAGE } from '../utils/initialData';


export default function usePageWithMovies(
    movies,
    localTextSearchName,
    localCheckboxName,
    localUpdatedMoviesName,
    getMovies
) {
    const [ isSearchSuccessful, setIsSearchSuccessful ] = useState(false);
    const [ infoResponse, setInfoResponse ] = useState('');

    const [ textSearch, setTextSearch ] = useState(localStorage.getItem(localTextSearchName) ?? '');
    const [ checkbox, setCheckbox ] = useState(JSON.parse(localStorage.getItem(localCheckboxName)) ?? false);

    const sortMovies = useSortMovies(movies, textSearch, checkbox);
    const [ updatedMovies, setUpdatedMovies ] = useState(JSON.parse(localStorage.getItem(localUpdatedMoviesName)) ?? sortMovies);


    const handleChangeSearch = (text) => {
        getMovies && getMovies();

        setTextSearch(text);
        localStorage.setItem(localTextSearchName, text);
    }

    const handleChangeCheckbox = (checked) => {
        setCheckbox(checked);
        localStorage.setItem(localCheckboxName, checked);
    }

    useEffect(() => {
        if (movies.length && !sortMovies.length) {
            setIsSearchSuccessful(false);
            setInfoResponse(INFORMATION_MESSAGE.NOTHING_FOUND);
        }
    }, [movies.length, sortMovies.length]);

    useEffect(() => {
        if (updatedMovies !== sortMovies && sortMovies.length) {
            setIsSearchSuccessful(true);

            setUpdatedMovies(sortMovies);
            localStorage.setItem(localUpdatedMoviesName, JSON.stringify(sortMovies));
        }
    }, [sortMovies, updatedMovies, sortMovies.length]);

    return {
        isSearchSuccessful,
        setIsSearchSuccessful,
        infoResponse,
        setInfoResponse,
        textSearch,
        setTextSearch,
        checkbox,
        setCheckbox,
        sortMovies,
        updatedMovies,
        setUpdatedMovies,
        handleChangeSearch,
        handleChangeCheckbox
    }
}