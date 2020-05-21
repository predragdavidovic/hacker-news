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
            const sorted = action.items.sort((a,b)=>(b.score - a.score))
            return {
                ...state,
                list: sorted
            }
        }

        case SORT_BY_DATE: {
            const sorted = action.items.sort((a,b)=>(b.time - a.time))
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