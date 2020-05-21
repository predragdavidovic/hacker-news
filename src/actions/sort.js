export const SORT_BY_POPULARITY = 'SORT_BY_POPULARITY';
export const SORT_BY_DATE = 'SORT_BY_DATE';

export function sortByPopularity(items, currentPage) {
    return {
        type: SORT_BY_POPULARITY,
        items,
        currentPage
    }
}

export function sortByDate(items, currentPage) {
    return {
        type: SORT_BY_DATE,
        items,
        currentPage
    }
}
