import {
    fetchStart,
    newsItemSave,
    fetchCompleted,
    setCurrentPage,
} from './index.js'

export function fetchAllStoriesIdsAsync(currentPage = 1){
    return function(dispatch) {
        dispatch(fetchStart())
        fetch(`https://hn.algolia.com/api/v1/search?tags=comment&page=${currentPage}`).
            then(el => el.json()).
            then(item => dispatch(newsItemSave(item, currentPage))).
            then(data => dispatch(fetchCompleted(data))).
            then(() => dispatch(setCurrentPage(currentPage)))
    }
}
