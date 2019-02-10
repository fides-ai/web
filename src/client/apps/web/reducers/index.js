/**
 * Created by asafam on 20/07/2017.
 */

'use strict';

import {combineReducers} from 'redux';
import page from './page';
import organization, * as fromOrganization from './organization';
import authentication, * as fromAuthentication from './authentication';
import models, * as fromModel from './models';
import errors from './errors';


const rootReducer = combineReducers({
    // short hand property names
    authentication,
    organization,
    models,
    page,
    errors
});

export default rootReducer;


// selectors

export const getUser = (state) => fromAuthentication.getUser(state.authentication);

export const getOrganizationId = (state) => fromOrganization.getOrganizationId(state.organization);

export const getModel = (state, organizationId, modelId) => {
    return fromModel.getModel(state.models, organizationId, modelId);
};

export const getModels = (state, organizationId) => fromModel.getModels(state.models, organizationId);

export const getModelDataset = (state) => fromModel.getDataset(state.models);

export const getModelExplanation = (state) => fromModel.getExplanation(state.models);

export const isFetchingModels = (state) => fromModel.isFetching(state.models);

export const isFetchingModel = (state, id) => fromModel.isFetchingModel(state.models, id);

export const isFetchingModelDataset = (state) => fromModel.isFetchingDataset(state.models);

export const isFetchingModelExplanation = (state) => fromModel.isFetchingExplanation(state.models);
