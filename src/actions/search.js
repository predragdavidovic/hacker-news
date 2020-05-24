export const START_SEARCH = 'SEARCH_START';
export const SEARCH_ITEM_SAVE = 'SEARCH_ITEM_SAVE';
export const SEARCH_COMPLETED = 'SEARCH_COMPLETED';

export function searchStart(){
    return {
        type: START_SEARCH,
        isFetching: true,
    }
}

export function searchCompleted() {
    return {
        type: SEARCH_COMPLETED,
        isFetching: false,
    }
}

export function searchItemSave(
    item, 
    pageNumber,
    currentPage, 
    ) { 
    return {
        type: SEARCH_ITEM_SAVE,
        page: pageNumber,
        searchItem: item,
        currentPage,
    }
}