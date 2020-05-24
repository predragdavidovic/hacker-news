import {
    START_SEARCH,
    SEARCH_ITEM_SAVE,
    SEARCH_COMPLETED,
} from '../actions/search.js';

const initial = {
    isFetching: false,
    list: {},
    visited: [],
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
            const {searchItem, searchItem: {page, nbPages}, currentPage} = action;
            return {
                ...state,
                nbPages,
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
        default: 
            return state
    }
}

export default search;