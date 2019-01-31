/**
 * Created by asafam on 1/15/2019.
 */
'use strict';

import ModelsApi from '../../../api/ModelsApi';


const api = new ModelsApi();

export const types = {
    MODELS_GET_REQUEST: 'MODELS_GET_REQUEST',
    MODELS_GET_SUCCESS: 'MODELS_GET_SUCCESS',
    MODELS_GET_FAILURE: 'MODELS_GET_FAILURE',
    MODELS_LIST_REQUEST: 'MODELS_LIST_REQUEST',
    MODELS_LIST_SUCCESS: 'MODELS_LIST_SUCCESS',
    MODELS_LIST_FAILURE: 'MODELS_LIST_FAILURE',
    MODELS_CREATE_REQUEST: 'MODELS_CREATE_REQUEST',
    MODELS_CREATE_SUCCESS: 'MODELS_CREATE_SUCCESS',
    MODELS_CREATE_FAILURE: 'MODELS_CREATE_FAILURE',
    MODELS_UPDATE_REQUEST: 'MODELS_UPDATE_REQUEST',
    MODELS_UPDATE_SUCCESS: 'MODELS_UPDATE_SUCCESS',
    MODELS_UPDATE_FAILURE: 'MODELS_UPDATE_FAILURE',
};

export const fetchModels = (organizationId, page = 0) => (dispatch) => {
    dispatch({type: types.MODELS_LIST_REQUEST});

    api.fetch(organizationId, page)
        .then(models => dispatch({
            type: types.MODELS_LIST_SUCCESS,
            models
        }))
        .catch(error => dispatch({
            type: types.MODELS_LIST_FAILURE,
            error
        }));
};

export const fetchModel = (id, organizationId) => (dispatch) => {
    if (!id) {
        return;
    }

    dispatch({type: types.MODELS_GET_REQUEST, id});

    api.fetchOne(id, organizationId)
        .then(model => dispatch({
            type: types.MODELS_GET_SUCCESS,
            model
        }))
        .catch(error => dispatch({
            type: types.MODELS_GET_FAILURE,
            error
        }));
};

export const createModel = (data, organizationId) => (dispatch) => {
    if (!data) {
        return;
    }
    
    dispatch({type: types.MODELS_GET_REQUEST, id});

    api.create(data, organizationId)
        .then(model => dispatch({
            type: types.MODELS_GET_SUCCESS,
            model
        }))
        .catch(error => dispatch({
            type: types.MODELS_GET_FAILURE,
            error
        }));
};

export const updateModel = (id, data, organizationId) => (dispatch) => {
    if (!id || !data) {
        return;
    }

    dispatch({type: types.MODELS_UPDATE_REQUEST, id});

    api.update(id, data, organizationId)
        .then(model => dispatch({
            type: types.MODELS_GET_SUCCESS,
            model
        }))
        .catch(error => dispatch({
            type: types.MODELS_GET_FAILURE,
            error
        }));
};
