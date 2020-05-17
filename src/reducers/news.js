import {
    FETCH_NEWS_START,
    NEWS_SAVE,
    FETCH_NEWS_COMPLETED,
    SORT_BY_POPULARITY,
    SORT_BY_DATE
} from '../actions/index.js'

const initial = {
    list: [],
    isFetching: false
}

const newsReducer = (state = initial, action) => {
    switch (action.type) {
        case FETCH_NEWS_START: {
            return {
                ...state,
                isFetching: true
            }
        }
        case NEWS_SAVE: {
            return {
                ...state,
                list: [...state.list, action.newsItem]
            }
        }
        case FETCH_NEWS_COMPLETED: {
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