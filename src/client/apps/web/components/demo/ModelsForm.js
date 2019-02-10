/**
 * Created by asafam on 02/06/2019.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';


class ModelsForm extends React.Component {

    constructor(props) {
        super(props);

        this.onSelect = this.onSelect.bind(this);

        const { selectedModel } = props;
        this.state = {
            selectedModel
        };
    }

    onSelect(event) {
        event.preventDefault();

        const selectedModelId = event.target.id;
        const { models, onSelect } = this.props;
        selectedModel = models.find(m => m.id === selectedModelId)

        this.setState({ selectedModel });

        onSelect(model);
    }

    render() {
        const { models, onSelect, fetching } = this.props;
        const { selectedModel } = this.state;

        return (
            <div className="models-form">
                <div className="models row">
                    {models.map(model => (
                        <div className="model col-lg-3 col-xs-6" onClick={this.onSelect}>
                            <div className="small-box bg-aqua">
                                <div className="inner">
                                    <h3>{model.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

ModelsForm.propTypes = {
    models: PropTypes.array,
    selectedModel: PropTypes.object,
    onSelect: PropTypes.func.isRequired,
    fetching: PropTypes.bool
};

export default ModelsForm;