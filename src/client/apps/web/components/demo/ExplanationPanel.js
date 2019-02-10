/**
 * Created by asafam on 02/06/2019.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';


const ExplanationPanel = ({explanation, model, data, fetching}) => {
    const {imageUrl} = explanation;
    return (
        <div className="explanation-panel">
            <img src={imageUrl} />
        </div>
    );
};

ExplanationPanel.propTypes = {
    explanation: PropTypes.object.isRequired,
    model: PropTypes.object,
    data: PropTypes.object,
    fetching: PropTypes.bool,
};

export default ExplanationPanel;