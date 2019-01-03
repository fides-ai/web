/**
 * Created by asafam on 20/07/2017.
 */


'use strict';

import React from 'react';
import Routes from './routes';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {appLoaded} from "../actions";
import {withAnalytics} from "../../../common/analytics/AnalyticsContext";
import 'admin-lte/dist/js/adminlte.min';


class App extends React.Component {

    componentWillMount() {
        this.props.actions.appLoaded();
    }

    render() {
        return (
            <Routes/>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return ownProps;
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({appLoaded}, dispatch)
    };
};

export default withAnalytics(connect(mapStateToProps, mapDispatchToProps)(App), false);