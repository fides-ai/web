/**
 * Created by asafam on 01/03/2019.
 */

'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
// import {getUser} from '../../reducers';


class SecuredRoute extends Route {

    isAuthenticated() {
        return this.props.loggedIn;
    }

    render() {
        if (false && !this.isAuthenticated()) {
            return (<Redirect to={{
                pathname: '/login',
                state: {from: this.props.location}
            }}/>);
        }

        return super.render();
    }
}

SecuredRoute.propTypes = {
    loggedIn: PropTypes.bool
};

const mapStateToProps = (state) => {
    const user = {};
    const {loggedIn} = user;
    return {
        loggedIn
    };
};

export default connect(mapStateToProps)(SecuredRoute);