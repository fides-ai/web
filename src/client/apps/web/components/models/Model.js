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
import '../../stylesheets/Models.scss';


const Model = ({ model, modelStats, fetching, onEdit }) => {
    const { name, description, type, version } = model;

    return (
        <div className="model">
            <div className="row">
                <div className="model-info col-md-4">
                    <div className="box box-widget widget-user-2">
                        <div className="widget-user-header bg-yellow">
                            <h3 className="widget-user-username">{name}</h3>
                            <h5 className="widget-user-desc">{description}</h5>
                        </div>
                        <div class="box-footer">
                            <div class="row">
                                <div class="col-sm-4 border-right">
                                    <div class="description-block">
                                        <h5 class="description-header">{version}</h5>
                                        <span class="description-text">VERSION</span>
                                    </div>
                                </div>
                                <div class="col-sm-4 border-right">
                                    <div class="description-block">
                                        <h5 class="description-header">{type}</h5>
                                        <span class="description-text">TYPE</span>
                                    </div>
                                </div>
                                {/* <div class="col-sm-4">
                                    <div class="description-block">
                                        <h5 class="description-header"></h5>
                                        <span class="description-text"></span>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Model;
