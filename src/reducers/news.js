import chunk from 'lodash.chunk';

import {
    FETCH_START,
    NEWS_ITEM_SAVE,
    FETCH_COMPLETED,
    SAVE_ALL_IDS,
    SAVE_VISITED_PAGE_NUMBER,
    SET_CURRENT_PAGE,
} from '../actions/index.js'

import {
    SORT_BY_POPULARITY,
    SORT_BY_DATE,
} from '../actions/sort.js'

const initial = {
    list: [],
    newsIds: [],
    currentPage: null,
    pageNumbers: [0],
    isFetching: false
}

const numberOfItemsPerPage = 40;

function sortItemsByType(action, type){
    const {currentPage, items} = action;
    const sorted = items[currentPage].sort((a,b)=>(b[type] - a[type]));
    items[currentPage] = [];
    items[currentPage] = sorted;
    return items
}

const newsReducer = (state = initial, action) => {
    switch (action.type) {
        case FETCH_START: {
            return {
                ...state,
                isFetching: true
            }
        }
        case SAVE_VISITED_PAGE_NUMBER: {
            return {
                ...state,
                pageNumbers: [...state.pageNumbers, action.numPage]
            }
        }

        case SAVE_ALL_IDS: {
            const idChunks = chunk(action.ids, numberOfItemsPerPage)
            return {
                ...state,
                newsIds: idChunks
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case NEWS_ITEM_SAVE: {
            return {
                ...state,
                list: { ...state.list, [action.page] : action.newsItem}
            }
        }
        case FETCH_COMPLETED: {
            return {
                ...state,
                isFetching: false
            }
        }
        case SORT_BY_POPULARITY: {
            const sorted = sortItemsByType(action, 'score')
            return {
                ...state,
                list: sorted
            }
        }
        case SORT_BY_DATE: {
            const sorted = sortItemsByType(action, 'time')
            return {
                ...state,
                list: sorted
            }
        }
        default: 
            return state
    }
}

export default newsReducer;