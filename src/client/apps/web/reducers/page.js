/**
 * Created by asafam on 1/3/2019.
 */

'use strict';

import {types} from '../actions/app';


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

export default pageHeader;