/**
 * Created by asafam on 02/06/2019.
 */
'use strict';

import PropTypes from 'prop-types';


const ModelDataForm = ({ data, selectedData, onSelect, fetching }) => {
    return (
        <div className="model-data-form">
            <h3>Model data form content here</h3>
        </div>
    );
};

ModelDataForm.propTypes = {
    data: PropTypes.array,
    selectedData: PropTypes.object,
    onSelect: PropTypes.func.isRequired,
    fetching: PropTypes.bool,
}

export default ModelDataForm;