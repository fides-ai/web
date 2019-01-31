/**
 * Created by asafam on 1/17/2019.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';


const ModelsListNewItem = ({ onClick }) => {
    return (
        <div className="models-list-new-item col-lg-3 col-xs-6">
          <div className="small-box">
            <div onClick={() => onClick()}>
                <div className="inner">
                    <h3>New Model</h3>
                </div>
                <div className="icon">
                    <i className="fa fa-plus"></i>
                </div>
            </div>
        </div>
        </div>
    );
};

ModelsListNewItem.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default ModelsListNewItem;
