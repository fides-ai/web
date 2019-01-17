/**
 * Created by asafam on 1/17/2019.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';


const ModelsListItem = ({ model, onClick }) => {
    const { id, name } = model;

    return (
        <div className="models-list-item col-lg-3 col-xs-6">
          <div className="small-box bg-aqua">
            <div onClick={() => onClick(id)}>
                <div className="inner">
                    <h3>{name}</h3>
                </div>
                <div class="icon">
                    <i class="fa "></i>
                </div>
            </div>
            <div class="small-box-footer" onClick={() => onClickEdit(id)}>
                More info <i class="fa fa-arrow-circle-right"></i>
            </div>
        </div>
        </div>
    );
};

ModelsListItem.propTypes = {
    model: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    onClickEdit: PropTypes.func.isRequired,
};

export default ModelsListItem;
