/**
 * Created by asafam on 1/17/2019.
 */
'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as modelsActions from '../actions';
import * as errorActions from '../../errors/actions';
import { getModel, getIsFetchingModel } from '../reducers';
import '../stylesheets/Models.scss';


const Model = ({ model, fetching, onClickNew, onClickEdit }) => {
    return (
        <div className="model">

        </div>
    ); 
}

export default Model;
