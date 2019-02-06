/**
 * Created by asafam on 1/17/2019.
 */
'use strict';

import { combineReducers } from 'redux';
import { types } from '../actions/models';


// reducers

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.MODELS_LIST_SUCCESS:
            const nextState = { ...state }; //shallow copy of state
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

const data = (state = [], action) => {

};

const fetching = (state = {}, action) => {
    switch (action.type) {
        case types.MODELS_LIST_REQUEST:

        case types.MODELS_CREATE_REQUEST:
        case types.MODELS_GET_REQUEST:
        case types.MODELS_UPDATE_REQUEST:
            const nextState = { ...state };
            return nextState[action.model.id] = true;
        case types.MODELS_LIST_SUCCESS:
        case types.MODELS_LIST_FAILURE:

        case types.MODELS_CREATE_SUCCESS:
        case types.MODELS_CREATE_FAILURE:
        case types.MODELS_GET_SUCCESS:
        case types.MODELS_GET_FAILURE:
        case types.MODELS_UPDATE_SUCCESS:
        case types.MODELS_UPDATE_FAILURE:
            const nextState = { ...state };
            return nextState[action.model.id] = false;
        default:
            return state;
    }
};

const fetchingById = (state, action) => {
    switch (action.type) {
        case types.MODELS_CREATE_REQUEST:
        case types.MODELS_GET_REQUEST:
        case types.MODELS_UPDATE_REQUEST:
            const nextState = { ...state };
            return nextState[action.model.id] = true;
        case types.MODELS_CREATE_SUCCESS:
        case types.MODELS_CREATE_FAILURE:
        case types.MODELS_GET_SUCCESS:
        case types.MODELS_GET_FAILURE:
        case types.MODELS_UPDATE_SUCCESS:
        case types.MODELS_UPDATE_FAILURE:
            const nextState = { ...state };
            return nextState[action.model.id] = false;
        default:
            return state
    }
};

const models = combineReducers({
    byId,
    ids,
    data,
    fetchingById
});

export default models;


// selectors

export const getModels = (state, organizationId) => {
    let models = state && state.ids && state.ids.filter(model => model.organizationId === organizationId) || [];
    return models;
}

export const getModel = (state, organizationId, id) => {
    const model = state && state.byId[id]
    return model && model.organizationId === organizationId ? model : null;
}

export const getModelData = (state, organizationId, id) => {
    const model = state && state.byId[id]
    return model && model.organizationId === organizationId ? model : null;
}

export const isFetching = (state) => {
    return state.fetching;
}