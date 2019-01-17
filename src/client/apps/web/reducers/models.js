/**
 * Created by asafam on 1/17/2019.
 */
'use strict';

import {types} from '../actions/app';


// reducers

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.MODELS_LIST_SUCCESS:
            const nextState = {...state}; //shallow copy of state
            action.models.forEach(model => {
                nextState[model.id] = model;
            });
            return nextState;
        case types.MODELS_GET_REQUEST:
        case types.MODELS_GET_SUCCESS:
        case types.MODELS_GET_FAILURE:
        case types.MODELS_CREATE_REQUEST:
        case types.MODELS_CREATE_SUCCESS:
        case types.MODELS_CREATE_FAILURE:
        case types.MODELS_UPDATE_REQUEST:
        case types.MODELS_UPDATE_SUCCESS:
        case types.MODELS_UPDATE_FAILURE:
            Object.values(state).forEach(model => (model.selected = false));
            if (!action.model) {
                return state;
            }

            action.model.selected = true;

            return {
                ...state,
                [action.model.id]: action.model
            };
        default:
            return state;
    }
};

const ids = (state = [], action) => {
    switch (action.type) {
        case types.MODELS_LIST_SUCCESS:
            return action.models.map(model => model.id);
        case types.MODELS_CREATE_REQUEST:
        case types.MODELS_CREATE_SUCCESS:
            action.model.selected = true;
            return [...state, action.model.id];
        default:
            return state;
    }
};

const isFetching = (state = false, action) => {
    switch (action.type) {
        case types.MODELS_CREATE_REQUEST:
        case types.MODELS_GET_REQUEST:
        case types.MODELS_LIST_REQUEST:
        case types.MODELS_UPDATE_REQUEST:
            return true;
        case types.MODELS_CREATE_SUCCESS:
        case types.MODELS_CREATE_FAILURE:
        case types.MODELS_GET_SUCCESS:
        case types.MODELS_GET_FAILURE:
        case types.MODELS_LIST_SUCCESS:
        case types.MODELS_LIST_FAILURE:
        case types.MODELS_UPDATE_SUCCESS:
        case types.MODELS_UPDATE_FAILURE:
            return false;
        default:
            return state;
    }
};

const models = combineReducers({
    byId,
    ids,
    isFetching
});

export default models;


// selectors

export const getModels = (state, organizationId) => {
    let models = state.values.filter(model => model.organizationId === organizationId));
    return models;
}

export const getModel = (state, organizationId, id) =>  {
    return state[id] && state[id].organizationId === organizationId ? state[id] : null;
}