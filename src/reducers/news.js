import {upperFirstLatter} from '../utilites/index.js'
import {
    FETCH_START,
    NEWS_ITEM_SAVE,
    FETCH_COMPLETED,
    SET_CURRENT_PAGE,
} from '../actions/index.js'

const initial = {
    currentPage: null,
    isFetching: false,
    visitedStory: [],
    visitedComment: [],
    nbPages: [],
    listStory: [],
    listComment: [],
    searchType: 'comment',
}

const newsReducer = (state = initial, action) => {
    switch (action.type) {
        case FETCH_START: {
            return {
                ...state,
                isFetching: true
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case NEWS_ITEM_SAVE: {
            const {newsItem, newsItem: {page, nbPages}, searchBy, searchType, searchForValue} = action
            const upperSearchType = upperFirstLatter(searchType);
            const visitedType = ['visited' + upperSearchType];
            const list = ['list' + upperSearchType]

            return {
                ...state,
                nbPages,
                searchType,
                searchBy,
                searchFor: searchForValue,
                [list]: { ...state[list], [page]: newsItem},
                [visitedType]: [...state[visitedType], page],
            }
        }
        case FETCH_COMPLETED: {
            return {
                ...state,
                isFetching: false
            }
        }
        default: 
            return state
    }
}

export default newsReducer;