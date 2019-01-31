/**
 * Created by asafam on 01/01/2019.
 */
'use strict';

import React from 'react';
import {firePageTracking} from '../../../../services/analytics';

class AnalyticsRouteTracker extends React.Component {

    componentDidMount() {
        this.pageChange(this.props.location.pathname);
    }

    componentDidUpdate(prevProps) {
        const {location: prevLocation} = prevProps;
        const {location: {pathname}} = this.props;
        const isDifferentPathname = pathname !== prevLocation.pathname;

        if (isDifferentPathname) {
            this.pageChange(pathname)
        }
    }

    pageChange(page) {
        firePageTracking(page);
    }

    render() {
        return null;
    }
}

export default AnalyticsRouteTracker;