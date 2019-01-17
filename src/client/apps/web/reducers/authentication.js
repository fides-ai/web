/**
 * Created by asafam on 30/07/2017.
 */

'use strict';

import { types } from '../actions/authentication';
import { loadKey, saveKey } from "../../../services/local-storage";


// reducers

const authentication = (state = null, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            let { user } = action;
            user.loggedIn = action.type === types.LOGIN_SUCCESS;
            user.loginFailure = false;
            saveKey('user', user);
            return { user };
        case types.LOGIN_FAILURE:
            return {
                user: {
                    ...action.user,
                    loginFailure: true
                }
            };
        case types.LOGOUT_SUCCESS:
            user = loadKey('user');
            user.loggedIn = false;
            delete user.access_token;
            delete user.token_type;
            saveKey('user', user);
            return { user };
        case types.APP_LOADED:
            return {
                user: loadKey('user')
            };
        default:
            return state;
    }
};

export default authentication;


// selectors

export const getUser = (state) => state && state.user;