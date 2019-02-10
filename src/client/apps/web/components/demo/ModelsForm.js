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

        const id = event.currentTarget.getAttribute('data-id');
        const { models, onSelect } = this.props;
        const selectedModel = models.find(m => m.id === id);

        this.setState({ selectedModel });

        onSelect(selectedModel);
    }

    render() {
        const { models, fetching } = this.props;
        const { selectedModel } = this.state;

        return (
            <div className="models-form">
                <div className="models row">
                    {models && models.map((model, index) => (
                        <div className="model" key={index} data-id={model.id} onClick={this.onSelect}>
                            <div className="col-lg-3 col-xs-6">
                                <div className="small-box">
                                    <div className="inner">
                                        <h4>{model.name}</h4>
                                        <p></p>
                                    </div>
                                    <div className="icon">

                                    </div>
                                    <a href="#" className="small-box-footer">
                                        More info <i className="fa fa-arrow-circle-right"></i>
                                    </a>
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