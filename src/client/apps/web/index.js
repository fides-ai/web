/**
 * Created by asafam on 01/03/2019.
 */

'use strict';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import Root from './containers/Root';


const store = configureStore(); // takes object with initial state (e.g. user from local storage)

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
);

