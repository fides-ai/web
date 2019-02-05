/**
 * Created by asafam on 01/03/2019.
 */
'use strict';


import { loadKey } from '../../../services/local-storage';
import { initializeAnalytics } from "../../../services/analytics";


export const types = {
    APP_LOADED: 'APP_LOADED',
    PAGE_LOADED: 'PAGE_LOADED',
    SET_ORGANIZATION: 'SET_ORGANIZATION',
};

export const pages = {
    MODELS_PAGE: 'ModelsPage',
    MODEL_PAGE: 'ModelPage',
    NEW_MODEL_PAGE: 'NewModelPage',
    DEMO_PAGE: 'DemoPage',
};

export const appLoaded = () => {
    initializeAnalytics({ googleAnalytics: { trackingId: __GA_TRACKING_ID__ } });
    return { type: types.APP_LOADED }
};

export const pageLoaded = (page) => {
    return {
        type: types.PAGE_LOADED,
        page
    };
};