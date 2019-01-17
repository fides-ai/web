/**
 * Created by asafam on 20/07/2017.
 */

'use strict';

import {types} from "../actions/app";


// reducers

const errors = (state = [], action) => {
    switch (action.type) {
        case types.ERRORS_ADD:
            state = [...state, action.error];
            break;
        case types.ERRORS_DELETE:
            state = state.filter(error => error.id !== action.id);
            break;
    }
    return state;
};
export default errors;

// selectors

export const getErrors = (state) => state;