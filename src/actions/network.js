import {sortByTime} from '../utilites/index.js';
import {
    fetchStart,
    newsItemSave,
    fetchCompleted,
    setCurrentPage,
} from './index.js';
import {
    searchStart,
    searchItemSave,
    searchCompleted
} from './search.js';

export function fetchAllStoriesIdsAsync({searchType="comment", searchBy= "", searchFor="", currentPage = 1}) {

    const searchForValue = sortByTime(searchFor)
    const api = `https://hn.algolia.com/api/v1/search${searchBy}?tags=${searchType}${searchForValue}&page=${currentPage}`;
    return function(dispatch) {
        dispatch(fetchStart())
        fetch(api).
            then(el => el.json()).
            then(item => dispatch(newsItemSave(item, currentPage, searchBy, searchType, searchFor))).
            then(data => dispatch(fetchCompleted(data))).
            then(() => dispatch(setCurrentPage(currentPage)))
    }
}

export function fetchOnSearchAsync({searchType, value, currentPage = 1, hitsPerPage}) {

    const api = `https://hn.algolia.com/api/v1/search?query=${value}&tags=${searchType}&page=1&hitsPerPage=${hitsPerPage}`
    return function(dispatch){
        dispatch(searchStart())
        fetch(api).
        then(response => response.json()).
        then(item => dispatch(searchItemSave(item,searchType,currentPage, hitsPerPage))).
        then(data => dispatch(searchCompleted(data)))
    }
}