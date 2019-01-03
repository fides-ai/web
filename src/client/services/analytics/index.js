/**
 * Created by asafam on 01/03/2019.
 */

'use strict';

import * as ga from './google-analytics';


export const GOOGLE_ANALYTICS = 1;
export const FACEBOOK_ANALYTICS = 2;
export const MIXPANEL_ANALYTICS = 4;
export const OPTIMIZELY_ANALYTICS = 8;
export const INTERNAL_ANALYTICS = 16;
export const ALL_ANALYTICS = GOOGLE_ANALYTICS | FACEBOOK_ANALYTICS | MIXPANEL_ANALYTICS | OPTIMIZELY_ANALYTICS | INTERNAL_ANALYTICS;
export const DEFAULT_ANALYTICS = GOOGLE_ANALYTICS;


const isEnabled = () => {
    return process.env.NODE_ENV === 'production'
};

export const initializeAnalytics = ({googleAnalytics}) => {
    if (!isEnabled()){
        return;
    }

    if (googleAnalytics) {
        ga.initialize(googleAnalytics.trackingId)
    }
};

export const fireEventTracking = (eventData, eventContent, analyticsMask = DEFAULT_ANALYTICS) => {
    if (!isEnabled()){
        return;
    }

    if (analyticsMask & GOOGLE_ANALYTICS) {
        const {category, action, label, value} = eventData;
        ga.fireEventTracking(category, action, label, value)
    }
};

export const firePageTracking = (page, analyticsMask = DEFAULT_ANALYTICS) => {
    if (!isEnabled()){
        return;
    }

    if (analyticsMask & GOOGLE_ANALYTICS) {
        ga.firePageTracking(page);
    }
};