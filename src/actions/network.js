import {
    fetchStart,
    newsItemSave,
    fetchCompleted,
    setCurrentPage,
} from './index.js'

export function fetchAllStoriesIdsAsync({searchType="comment", searchBy= "", currentPage = 1}) {
    
    const api = `http://hn.algolia.com/api/v1/search${searchBy}?tags=${searchType}&page=${currentPage}`;
    return function(dispatch) {
        dispatch(fetchStart())
        fetch(api).
            then(el => el.json()).
            then(item => dispatch(newsItemSave(item, currentPage, searchBy, searchType))).
            then(data => dispatch(fetchCompleted(data))).
            then(() => dispatch(setCurrentPage(currentPage)))
    }
}
