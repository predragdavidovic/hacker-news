import {combineReducers} from 'redux';
import news from './news.js'
import search from './search.js'

export default combineReducers({news, search})