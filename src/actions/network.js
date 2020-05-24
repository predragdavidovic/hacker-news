import {
    sortByTime
} from '../utilites/index.js';

import {
    fetchStart,
    newsItemSave,
    fetchCompleted,
    setCurrentPage,
} from './index.js'

export function fetchAllStoriesIdsAsync({searchType="comment", searchBy= "", searchFor="", currentPage = 1}) {

    const searchForValue = sortByTime(searchFor)
    const api = `http://hn.algolia.com/api/v1/search${searchBy}?tags=${searchType}${searchForValue}&page=${currentPage}`;
    
    return function(dispatch) {
        dispatch(fetchStart())
        fetch(api).
            then(el => el.json()).
            then(item => dispatch(newsItemSave(item, currentPage, searchBy, searchType, searchFor))).
            then(data => dispatch(fetchCompleted(data))).
            then(() => dispatch(setCurrentPage(currentPage)))
    }
}
