export const SORT_BY_POPULARITY = 'SORT_BY_POPULARITY';
export const SORT_BY_DATE = 'SORT_BY_DATE';

export function sortByPopularity(items){
    return {
        type: SORT_BY_POPULARITY,
        items
    }
}

export function sortByDate(items){
    return {
        type: SORT_BY_DATE,
        items
    }
}
