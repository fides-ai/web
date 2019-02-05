/**
 * Created by asafam on 02/06/2019.
 */
'use strict';

import PropTypes from 'prop-types';


const ModelsForm = ({ models, selectedModel, onSelect, fetching }) => {
    return (
        <div className="models-form">
            <h3>Models form content here</h3>
        </div>
    );
};

ModelsForm.propTypes = {
    models: PropTypes.array,
    selectedModel: PropTypes.object,
    onSelec: PropTypes.func.isRequired,
    fetching: PropTypes.bool
};

export default ModelsForm;