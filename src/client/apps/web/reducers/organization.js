/**
 * Created by asafam on 30/07/2017.
 */

'use strict';

import {types} from '../actions/app';
import {loadKey, saveKey} from "../../../services/local-storage";


// reducers

const organization = (state = null, action) => {
    const key = 'organization';
    
    switch (action.type) {
        case types.SET_ORGANIZATION:
            let {id} = action;
            saveKey(key, id);
            return {id};
        case types.APP_LOADED:
            return {
                id: loadKey(key)
            };
        default:
            return state;
    }
};

export default organization;


// selectors

export const getOrganizationId = (state) => state && state.id;