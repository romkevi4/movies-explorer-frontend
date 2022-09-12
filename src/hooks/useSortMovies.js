import { useMemo } from 'react';

export default function useSortMovies(movies, textSearch, checkbox) {
    return useMemo(() => movies.filter(movie => {
        const { nameRU, nameEN, duration } = movie;
        const text = textSearch.toLowerCase();

        if (checkbox && duration > 40) {
            return false;
        }

        return nameRU?.toLowerCase().includes(text) || nameEN?.toLowerCase().includes(text);
    }), [checkbox, textSearch, movies]);
}