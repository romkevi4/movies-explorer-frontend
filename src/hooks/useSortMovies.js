import { useMemo } from 'react';

import { INFORMATION_VALUES } from '../utils/constants';

export default function useSortMovies(movies, textSearch, checkbox) {
    return useMemo(() => movies.filter(movie => {
        const { nameRU, nameEN, duration } = movie;
        const text = textSearch.toLowerCase();

        if (checkbox && duration > INFORMATION_VALUES.DURATION_OF_SHORT_FILM) {
            return false;
        }

        return nameRU?.toLowerCase().includes(text) || nameEN?.toLowerCase().includes(text);
    }), [checkbox, textSearch, movies]);
}