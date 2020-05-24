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

export function upperFirstLatter(word){
    return word.charAt(0).toUpperCase() + word.slice(1)
 }