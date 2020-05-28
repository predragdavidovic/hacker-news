import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();
export const devStore = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);