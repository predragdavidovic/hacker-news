export const START_SEARCH = 'SEARCH_START';
export const SEARCH_ITEM_SAVE = 'SEARCH_ITEM_SAVE';
export const SEARCH_COMPLETED = 'SEARCH_COMPLETED';
export const SEARCH_SETTINGS = 'SEARCH_SETTINGS';

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
    searchType,
    currentPage,
    hitsPerPage,
    ) { 
    return {
        type: SEARCH_ITEM_SAVE,
        searchType,
        searchItem: item,
        currentPage,
        hitsPerPage
    }
}

export function searchSettings(hitsPerPage) {
    return {
        type: SEARCH_SETTINGS,
        hitsPerPage
    }
}