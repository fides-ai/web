/**
 * Created by asafam on 01/03/2019.
 */

'use strict';

import {types} from "../actions";


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