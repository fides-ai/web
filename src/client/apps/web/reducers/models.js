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
            action.model.selected = true;
            return [...state, action.model.id];
        default:
            return state;
    }
};

const datasetById = (state = {}, action) => {
    switch (action.type) {
        case types.MODELS_DATA_LIST_SUCCESS:
            const { modelId, dataset } = action;
            return { ...state, [modelId]: dataset }
        default:
            return state;
    }
};

const explanationById = (state = {}, action) => {
    const { modelId } = action;
    switch (action.type) {
        case types.MODELS_DATA_EXPLAIN_SUCCESS:
            state[modelId] = state[modelId] || {};
            const explananation = {
                ...state[modelId],
                [action.dataId]: action.explanation
            };
            return { ...state, [modelId]: explananation };
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

const fetchingDataById = (state = {}, action) => {
    switch (action.type) {
        case types.MODELS_DATA_LIST_REQUEST:
            return { ...state, [action.modelId]: true };
        case types.MODELS_DATA_LIST_SUCCESS:
        case types.MODELS_DATA_LIST_FAILURE:
            return { ...state, [action.modelId]: false };
        default:
            return state;
    }
};

const fetchingExplanationById = (state = {}, action) => {
    const { modelId, data } = action;
    const nextState = { ...state };

    switch (action.type) {
        case types.MODELS_DATA_LIST_REQUEST:
            nextState[modelId] = state[modelId] || {};
            nextState[modelId][data.id] = true;
            return nextState;
        case types.MODELS_DATA_LIST_SUCCESS:
        case types.MODELS_DATA_LIST_FAILURE:
            nextState[modelId] = state[modelId] || {};
            nextState[modelId][data.id] = false;
            return nextState;
        default:
            return state;
    }
};

const models = combineReducers({
    byId,
    ids,
    datasetById,
    explanationById,
    fetching,
    fetchingById,
    fetchingDataById,
    fetchingExplanationById,
});

export default models;


// selectors

export const getModels = (state, organizationId) => {
    let models = state && state.ids && state.ids.filter(model => model.organizationId === organizationId) || [];
    return models;
};

export const getModel = (state, id) => {
    return id && state.byId[id];
};

export const getModelDataset = (state, modelId) => {
    return modelId && state.dataById[modelId];
};

export const getModelData = (state, modelId, dataId) => {
    if (!modelId || !dataId) {
        return null;
    }

    const dataset = state.datasetById[modelId];
    const data = dataset.find(data => data.id === dataId);
    return data;
};

export const getModelDataExplanation = (state, modelId, dataId) => {
    return modelId && dataId && state.explanationById[modelId] && state.explanationById[modelId][dataId]; // todo!!!
};

export const isFetching = (state) => {
    return state.fetching;
};

export const isFetchingModel = (state, id) => {
    return !!id && state.fetchingById[id];
};

export const isFetchingData = (state, modelId) => {
    return !!modelId && state.fetchingDataById[modelId];
};

export const isFetchingExplanation = (state, modelId) => {
    return !!modelId && state.fetchingDataById[modelId];
};