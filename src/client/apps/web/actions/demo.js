/**
 * Created by asafam on 1/15/2019.
 */
'use strict';

import DemoApi from '../../../api/DemoApi';


const api = new DemoApi();

export const types = {
    DEMO_MODELS_LIST_REQUEST: 'DEMO_MODELS_LIST_REQUEST',
    DEMO_MODELS_LIST_SUCCESS: 'DEMO_MODELS_LIST_SUCCESS',
    DEMO_MODELS_LIST_FAILURE: 'DEMO_MODELS_LIST_FAILURE',
    DEMO_MODEL_DATA_LIST_REQUEST: 'DEMO_MODEL_DATA_LIST_REQUEST',
    DEMO_MODEL_DATA_LIST_SUCCESS: 'DEMO_MODEL_DATA_LIST_SUCCESS',
    DEMO_MODEL_DATA_LIST_FAILURE: 'DEMO_MODEL_DATA_LIST_FAILURE',
    DEMO_MODEL_DATA_EXPLAIN_REQUEST: 'DEMO_MODEL_DATA_EXPLAIN_REQUEST',
    DEMO_MODEL_DATA_EXPLAIN_SUCCESS: 'DEMO_MODEL_DATA_EXPLAIN_SUCCESS',
    DEMO_MODEL_DATA_EXPLAIN_FAILURE: 'DEMO_MODEL_DATA_EXPLAIN_FAILURE',
};

export const fetchDemoModels = (page = 0) => (dispatch) => {
    dispatch({ type: types.DEMO_MODELS_LIST_REQUEST });

    api.fetchModels(page)
        .then(models => dispatch({
            type: types.DEMO_MODELS_LIST_SUCCESS,
            models
        }))
        .catch(error => dispatch({
            type: types.DEMO_MODELS_LIST_FAILURE,
            error
        }));
};

export const fetchDemoModelData = (modelId, page = 0) => (dispatch) => {
    if (!modelId) {
        return;
    }

    dispatch({ type: types.DEMO_MODEL_DATA_LIST_REQUEST, modelId });

    api.fetchModelData(modelId, page)
        .then(data => dispatch({
            type: types.DEMO_MODEL_DATA_LIST_SUCCESS,
            data
        }))
        .catch(error => dispatch({
            type: types.DEMO_MODEL_DATA_LIST_FAILURE,
            error
        }));
};

export const explainModelData = (modelId, data) => (dispatch) => {
    dispatch({ type: types.DEMO_MODEL_DATA_EXPLAIN_REQUEST, modelId });

    api.explain(modelId, data)
        .then(explanation => dispatch({
            type: types.DEMO_MODEL_DATA_EXPLAIN_SUCCESS,
            explanation
        }))
        .catch(error => dispatch({
            type: types.DEMO_MODEL_DATA_EXPLAIN_FAILURE,
            error
        }));
};
