export const FETCH_NEWS_START = 'FETCH_NEWS_START';
export const NEWS_SAVE = 'NEWS_SAVE';
export const FETCH_NEWS_COMPLETED = 'FETCH_NEWS_COMPLETED';
export const SORT_BY_POPULARITY = 'SORT_BY_POPULARITY';
export const SORT_BY_DATE = 'SORT_BY_DATE';

function fetchNewsStart(){
    return {
        type: FETCH_NEWS_START,
        isFetching: true,
    }
}

function newsSave(item){
    return {
        type: NEWS_SAVE,
        newsItem: item
    }
}

function fetchNewsCompleted() {
    return {
        type: FETCH_NEWS_COMPLETED,
        isFetching: false,
    }
}

export function sortByPopularity(items){
    return {
        type: SORT_BY_POPULARITY,
        items
    }
}

export function sortByDate(items){
    return {
        type: SORT_BY_DATE,
        items
    }
}

export function fetchNewsAsync(type='topstories'){

    return function(dispatch) {
        
        dispatch(fetchNewsStart())
        const url = `https://hacker-news.firebaseio.com/v0/${type}.json??query=test`; ///search_by_date?query=
        fetch(url).
        then(resp => resp.json()).
        // then(data => data.slice(0,50)).
        then(idArray => {
            const requests = idArray.map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`))
            const result = Promise.all(requests).
            then(responses => Promise.all(responses.map(resp => resp.json()))).
            then(responses => responses.forEach(value => dispatch(newsSave(value)))).
            then(data => dispatch(fetchNewsCompleted(data)))
        });


  
    }
}