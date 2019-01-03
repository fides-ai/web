/**
 * Created by asafam on 01/03/2019.
 */

'use strict';

import ReactGA from 'react-ga';


export const initialize = (trackingId) => {
    ReactGA.initialize(trackingId);
};

export const fireEventTracking = (category, action, label, value) => {
    ReactGA.event({category, action, label, value});
};

export const firePageTracking = (page) => {
    page = page || window.location.pathname;
    ReactGA.set({page});
    ReactGA.pageview(page);
};