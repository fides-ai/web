/**
 * Created by asafam on 20/07/2017.
 */

'use strict';

import {combineReducers} from 'redux';
import page from './page';
import errors from '../../../common/errors/reducers';


const rootReducer = combineReducers({
    // short hand property names
    page,
    errors
});

export default rootReducer;


// selectors

// export const getUser = (state) => fromAuthentication.getUser(state.authentication);