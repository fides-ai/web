/**
 * Created by asafam on 01/03/2019.
 */

'use strict';

import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import rootReducer from '../reducers'


export default function configureStore(persistedState) {
    let middlewares = [];

    if (process.env.NODE_ENV !== 'production') {
        const loggerMiddleware = createLogger();
        middlewares.push(loggerMiddleware);
    }

    middlewares = [...middlewares, thunkMiddleware];

    const store = createStore(
        rootReducer,
        persistedState,
        applyMiddleware(...middlewares)
    );
    return store;
}