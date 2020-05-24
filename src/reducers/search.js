import {
    START_SEARCH,
    SEARCH_ITEM_SAVE,
    SEARCH_COMPLETED,
    SEARCH_SETTINGS,
} from '../actions/search.js';

const initial = {
    isFetching: false,
    list: {},
    visited: [],
    hitsPerPage: 30,
}

const search = (state = initial, action) => {
    switch (action.type) {
        case START_SEARCH: {
            return {
                ...state,
                isFetching: true
            }
        }
        case SEARCH_ITEM_SAVE: {
            const {searchItem, searchItem: {page, nbPages}, currentPage, hitsPerPage} = action;
            return {
                ...state,
                nbPages,
                hitsPerPage,
                visited: [...state.visited, page],
                list: {...state.list, [currentPage]: searchItem}
            }
        }
        case SEARCH_COMPLETED: {
            return {
                ...state,
                isFetching: false
            }
        }
        case SEARCH_SETTINGS: {
            return {
                ...state,
                hitsPerPage: action.hitsPerPage,
            }
        }
        default: 
            return state
    }
}

export default search;