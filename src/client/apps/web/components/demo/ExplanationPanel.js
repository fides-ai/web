/**
 * Created by asafam on 02/06/2019.
 */
'use strict';

import PropTypes from 'prop-types';


const ExplanationPanel = ({explanation, model, data, fetching}) => {
    return (
        <div className="explanation-panel">
            <h3>Explanation here</h3>
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