import thunkMiddleware from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';

export const prodStore  = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
    )
);