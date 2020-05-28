/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App.js';
import {devStore} from './store/devStore.js';
import {prodStore} from './store/prodStore.js';

let store;
if (ENV === "development") {
    store = devStore;
} else {
    store = prodStore;
}

ReactDOM.render(
    <Provider store={store} >
        <App/>
    </Provider>, 
    document.getElementById('root')
);