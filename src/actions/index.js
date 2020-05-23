export const FETCH_START = 'FETCH_START';
export const NEWS_ITEM_SAVE = 'NEWS_ITEM_SAVE';
export const FETCH_COMPLETED = 'FETCH_COMPLETED';
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export function fetchStart(){
    return {
        type: FETCH_START,
        isFetching: true,
    }
}

export function fetchCompleted() {
    return {
        type: FETCH_COMPLETED,
        isFetching: false,
    }
}

export function setCurrentPage(currentPage){
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export function newsItemSave(item, pageNumber){
    return {
        type: NEWS_ITEM_SAVE,
        page: pageNumber,
        newsItem: item
    }
}