/**
 * Created by asafam on 1/17/2019.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';


const ModelsListNewItem = ({ model, onClick }) => {
    const { id, name } = model || {};

    return (
        <div className="models-list-new-item col-lg-3 col-xs-6">
          <div className="small-box">
            <div onClick={() => onClick(id)}>
                <div className="inner">
                    <h3>New Model</h3>
                </div>
                <div class="icon">
                    <i class="fa fa-plus"></i>
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
