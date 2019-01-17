/**
 * Created by asafam on 1/15/2019.
 */
'use strict';


export const types = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT_REQUEST: 'LOGOUT_REQUEST',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    LOGOUT_FAILURE: 'LOGOUT_FAILURE',
};


export const login = (email, password) => (dispatch) => {
    if (!email || !password) {
        return;
    }

    dispatch({type: types.LOGIN_REQUEST});

    // const authenticationApi = new AuthenticationApi();
    // return authenticationApi.login(email, password)
    //     .then(credentials => dispatch({
    //         type: types.LOGIN_SUCCESS,
    //         user: {
    //             email,
    //             ...credentials
    //         },
    //     }))
    //     .catch(error => {
    //         dispatch({
    //             type: types.LOGIN_FAILURE,
    //             user: {
    //                 email,
    //             },
    //             error});
    //         return;
    //     });
};

export const logout = () => (dispatch) => {
    dispatch({type: types.LOGOUT_REQUEST});

    // const authenticationApi = new AuthenticationApi();
    // return authenticationApi.logout()
    //     .then(() => dispatch({
    //         type: types.LOGOUT_SUCCESS
    //     }))
    //     .catch(err => {
    //         dispatch({type: types.LOGOUT_FAILURE});
    //         throw(err);
    //     });
};
