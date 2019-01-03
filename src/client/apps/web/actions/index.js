/**
 * Created by asafam on 01/03/2019.
 */

'use strict';


import AuthenticationApi from '../../../api/AuthenticationApi';
import {loadKey} from '../../../services/local-storage';
import {initializeAnalytics} from "../../../services/analytics";


export const types = {
    APP_LOADED: 'APP_LOADED',
};

export const appLoaded = () => {
    initializeAnalytics({googleAnalytics: {trackingId: __GA_TRACKING_ID__}});
    return {type: types.APP_LOADED}
};