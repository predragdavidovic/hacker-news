export function renderAppropriateList(searchType, listStory, listComment){
    switch(searchType){
        case 'story': {
            return listStory;
        }
        case 'comment': {
            return listComment
        }
        default: {
            return [];
        }
    }
}

export function sortByTime(searchFor){
    const currentTimestamp = Math.floor(Date.now()/1000)
    const oneDayInSeconds = 86400;

    switch (searchFor) {
        case 'all': {
            return "";
        }
        case 'last24': {
            const time = currentTimestamp - oneDayInSeconds;
            return `&numericFilters=created_at_i>${time}`
        }
        case 'pastWeek': {
            const time = currentTimestamp - (oneDayInSeconds * 7)
            return `&numericFilters=created_at_i>${time}`
        }
        case 'pastMonth': {
            const time = currentTimestamp - (oneDayInSeconds * 30);
            return `&numericFilters=created_at_i>${time}`
        }
        case 'pastYear': {
            const time = currentTimestamp - (oneDayInSeconds * 360);
            return `&numericFilters=created_at_i>${time}`
        }
        default: {
            return ""
        }
    }
}

export function upperFirstLatter(word){
    return word.charAt(0).toUpperCase() + word.slice(1)
 }