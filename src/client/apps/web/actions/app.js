/**
 * Created by asafam on 01/03/2019.
 */

'use strict';


import {loadKey} from '../../../services/local-storage';
import {initializeAnalytics} from "../../../services/analytics";


export const types = {
    APP_LOADED: 'APP_LOADED',
    MODELS_PAGE_LOADED: 'MODELS_PAGE_LOADED',
    MODEL_PAGE_LOADED: 'MODEL_PAGE_LOADED',
    NEW_MODEL_PAGE_LOADED: 'NEW_MODEL_PAGE_LOADED',
    SET_ORGANIZATION: 'SET_ORGANIZATION',
};

export const appLoaded = () => {
    initializeAnalytics({googleAnalytics: {trackingId: __GA_TRACKING_ID__}});
    return {type: types.APP_LOADED}
};

export const modelsPageLoaded = () => {
    return {
        type: types.MODELS_PAGE_LOADED
    };
}

export const modelPageLoaded = () => {
    return {
        type: types.MODEL_PAGE_LOADED
    };
}

export const newModelPageLoaded = () => {
    return {
        type: types.NEW_MODEL_PAGE_LOADED
    };
}