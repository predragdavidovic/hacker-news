import {
    fetchStart,
    saveAllIds,
    newsItemSave,
    fetchCompleted,
    setCurrentPage,
    saveVisitedPage,
    cleanReducer,
} from './index.js'

const numberOfItemsFirstPage = 40;

export function fetchAllStoriesIdsAsync(type='topstories'){
    return function(dispatch) {
        dispatch(cleanReducer())
        dispatch(fetchStart())
        const allStoriesUrl = `https://hacker-news.firebaseio.com/v0/${type}.json?print=pretty`;
        fetch(allStoriesUrl).
        then(resp => resp.json()).
        then(item => dispatch(saveAllIds(item))).
        then(item => {
            const allUrl = item.ids.slice(0,numberOfItemsFirstPage).map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`))
            Promise.all(allUrl).
            then(item => item).
            then(res => Promise.all(res.map(r => r.json()))).
            then(item =>  dispatch(newsItemSave(item,0))).
            then(data => dispatch(fetchCompleted(data))).
            then(() => dispatch(setCurrentPage(0)))
        })
    }
}

export function fetchStoriesPerPageAsync(items, numPage){

    return function(dispatch) {
        dispatch(saveVisitedPage(numPage))
       const allItemsUrl = items.map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`))
        
        Promise.all(allItemsUrl).
        then(item => item).
        then(res => Promise.all(res.map(r => r.json()))).
        then(item =>  dispatch(newsItemSave(item,numPage))).
        then(() => dispatch(fetchCompleted())).
        then(() => dispatch(setCurrentPage(numPage))).
        catch(err => {console.log(err)})
    }
}