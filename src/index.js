import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, applyMiddleware} from 'redux'

import {Provider} from 'react-redux'

import reducers from './reducers/rootReducer'
// import redux-promise for our AJAX
import reduxPromise from 'redux-promise'

// const theStore = createStore(reducers)
const theStore = createStore(reducers)

ReactDOM.render(
    <Provider store={theStore}>
        <App />
    </Provider>, 
    document.getElementById('root'));
    registerServiceWorker();
