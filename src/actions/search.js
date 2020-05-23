export const FETCH_SEARCH = 'FETCH_SEARCH';

export function fetchSearch(){
    return {
        type: FETCH_SEARCH,
        isFetching: true,
    }
}