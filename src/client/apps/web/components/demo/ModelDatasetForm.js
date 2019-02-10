/**
 * Created by asafam on 02/06/2019.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';


class ModelDatasetForm extends React.Component{
    
    constructor(props) {
        super(props);

        this.onSelect = this.onSelect.bind(this);

        const { selectedData } = props;
        this.state = {
            selectedData
        };
    }

    onSelect(event) {
        event.preventDefault();

        const id = event.currentTarget.getAttribute('data-id');
        const { dataset, onSelect } = this.props;
        const selectedData = dataset.find(d => d.id === id);

        this.setState({ selectedData });
        
        onSelect(selectedData);
    }

    render() {
        const { dataset, fetching } = this.props;
        const { selectedData } = this.state;

        return (
            <div className="model-dataset-form">
                <div className="box-body table-responsive no-padding">
                    <table className="table table-hover">
                        <tbody>
                            {dataset && dataset.map((data, index) =>
                                <tr key={index} onClick={this.onSelect}>
                                    <td>{index+1}</td>
                                    <td>{data.description}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

ModelDatasetForm.propTypes = {
    dataset: PropTypes.array,
    selectedData: PropTypes.object,
    onSelect: PropTypes.func.isRequired,
    fetching: PropTypes.bool,
}

export default ModelDatasetForm;