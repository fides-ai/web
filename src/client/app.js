/**
 * Created by asafam on 01/03/2019.
 */

'use strict';

import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import configureStore from './store/configure-store';

//import rootReducer from './reducers';
import rootReducer from './redux/reducers/';

// Routes
import AppRoutes from './routes';


// Configuring redux store & the redux dev tool
const store = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <div>
  <Provider store={store}>
    <Router>
      <AppRoutes/>
    </Router>
  </Provider>
  </div>
  , document.getElementById('root'));
