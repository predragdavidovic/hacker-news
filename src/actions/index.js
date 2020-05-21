export const FETCH_ALL_STORIES_IDS = 'FETCH_ALL_STORIES_IDS';
export const FETCH_START = 'FETCH_START';
export const NEWS_ITEM_SAVE = 'NEWS_ITEM_SAVE';
export const FETCH_COMPLETED = 'FETCH_COMPLETED';
export const SAVE_ALL_IDS = "SAVE_ALL_IDS";

export const SAVE_VISITED_PAGE_NUMBER = "SAVE_VISITED_PAGE_NUMBER";

export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

fetchStart,
saveAllIds,
newsItemSave,
fetchCompleted,
setCurrentPage,
saveVisitedPage

export function saveAllIds(data){
    return {
        type: SAVE_ALL_IDS,
        ids: data
    }
}

export function fetchStart(){
    return {
        type: FETCH_START,
        isFetching: true,
    }
}

export function saveVisitedPage(numPage){
    return {
        type: SAVE_VISITED_PAGE_NUMBER,
        numPage
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

export function fetchCompleted() {
    return {
        type: FETCH_COMPLETED,
        isFetching: false,
    }
}