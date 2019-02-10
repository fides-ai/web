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
            return [...state, action.model.id];
        default:
            return state;
    }
};

const datasetById = (state = {}, action) => {
    switch (action.type) {
        case types.MODELS_DATA_LIST_SUCCESS:
            const nextState = {}; // shallow copy of state
            action.dataset.forEach(data => {
                nextState[data.id] = data;
            });
            return nextState;
        default:
            return state;
    }
};

const explanation = (state = null, action) => {
    switch (action.type) {
        case types.MODELS_DATA_EXPLAIN_SUCCESS:
            return action.explanation;
        default:
            return state;
    }
}

const fetching = (state = false, action) => {
    switch (action.type) {
        case types.MODELS_LIST_REQUEST:
            return true;
        case types.MODELS_LIST_SUCCESS:
        case types.MODELS_LIST_FAILURE:
            return false;
        default:
            return state;
    }
};

const fetchingById = (state = {}, action) => {
    switch (action.type) {
        case types.MODELS_CREATE_REQUEST:
        case types.MODELS_GET_REQUEST:
        case types.MODELS_UPDATE_REQUEST:
            return { ...state, [action.model.id]: true };
        case types.MODELS_CREATE_SUCCESS:
        case types.MODELS_CREATE_FAILURE:
        case types.MODELS_GET_SUCCESS:
        case types.MODELS_GET_FAILURE:
        case types.MODELS_UPDATE_SUCCESS:
        case types.MODELS_UPDATE_FAILURE:
            return { ...state, [action.model.id]: false };
        default:
            return state;
    }
};

const fetchingDataset = (state = false, action) => {
    switch (action.type) {
        case types.MODELS_DATA_LIST_REQUEST:
            return true;
        case types.MODELS_DATA_LIST_SUCCESS:
        case types.MODELS_DATA_LIST_FAILURE:
            return false;
        default:
            return state;
    }
};

const fetchingExplanation = (state = false, action) => {
    switch (action.type) {
        case types.MODELS_DATA_EXPLAIN_REQUEST:
            return true;
        case types.MODELS_DATA_EXPLAIN_SUCCESS:
        case types.MODELS_DATA_EXPLAIN_FAILURE:
            return false;
        default:
            return state;
    }
};

const models = combineReducers({
    byId,
    ids,
    datasetById,
    explanation,
    fetching,
    fetchingById,
    fetchingDataset,
    fetchingExplanation,
});

export default models;


// selectors

export const getModels = (state, organizationId) => {
    let models = state && Object.values(state.byId).filter(model => model.organizationId === organizationId) || [];
    return models;
};

export const getModel = (state, id) => {
    return id && state.byId[id];
};

export const getDataset = (state) => {
    return Object.values(state.datasetById);
};

export const getExplanation = (state) => {
    return state.explanation;
};

export const isFetching = (state) => {
    return state.fetching;
};

export const isFetchingModel = (state, id) => {
    return !!id && state.fetchingById[id];
};

export const isFetchingDataset = (state) => {
    return state.fetchingDataset;
};

export const isFetchingExplanation = (state) => {
    return state.fetchingExplanation;
};