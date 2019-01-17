/**
 * Created by asafam on 01/03/2019.
 */

'use strict';

export const types = {
    ERRORS_ADD: 'ERRORS_ADD',
    ERRORS_DELETE: 'ERRORS_DELETE',
};

export const addError = (error) => (dispatch) => {
    return dispatch({
        type: types.ERRORS_ADD,
        error: {
            id: Math.random().toString(26).slice(2),
            message: error.message,
            status: error.response && error.response.status
        }
    });
};

export const deleteError = (id) => (dispatch) => dispatch({type: types.ERRORS_DELETE, id});
