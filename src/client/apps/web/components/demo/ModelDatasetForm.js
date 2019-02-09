/**
 * Created by asafam on 02/06/2019.
 */
'use strict';

import PropTypes from 'prop-types';


const ModelDatasetForm = ({ dataset, selectedData, onSelect, fetching }) => {
    return (
        <div className="model-data-form">
            <h3>Model dataset form content here</h3>
        </div>
    );
};

ModelDatasetForm.propTypes = {
    dataset: PropTypes.array,
    selectedData: PropTypes.object,
    onSelect: PropTypes.func.isRequired,
    fetching: PropTypes.bool,
}

export default ModelDatasetForm;