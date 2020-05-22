import {
    FETCH_SEARCH
} from '../actions/search.js';

const initial = {

}

const search = (state = initial, action) => {
    switch (action.type) {
        case FETCH_SEARCH: {
            return {
                ...state,
                isFetching: true
            }
        }

        default: 
            return state
    }
}

export default search;