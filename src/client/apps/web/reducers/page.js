/**
 * Created by asafam on 30/07/2017.
 */

'use strict';

import {types} from '../actions';
import {loadKey} from '../../../services/local-storage';


const initialState = {
    title: null,
    subtitle: null
};


const pageHeader = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
    }
};
//
export default pageHeader;