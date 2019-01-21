/**
 * Create by asafam on 1/17/2019.
 */
'use strict';

import React from 'react';


class ModelForm extends React.Component {
    constructor(props) {
        super(props);

        const { model } = props;
        this.state = { model };

        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(evet) {
        event.preventDefault();

        const { name, value } = event.target;
        const { model } = this.state;

        model[name] = value;
        const nextState = {
            model
        };
        this.setState(nextState);
    }

    handleCancel(event) {
        event.preventDefault();

        // todo: go to previous page
    }

    handleSave(event) {
        event.preventDefault();

        const { onSave } = this.props;
        const { model } = this.state;
        onSave(model);

        // todo: go to saved model page
    }

    render() {
        const { model } = this.state;
        const { name, type, version } = model || {};

        return (
            <form className="model-form form-horizontal">
                <div className="box-body">

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Name</label>

                        <div className="col-sm-10">
                            <input value={name} type="text" className="form-control" id="inputName"
                                name="name" onChange={this.handleChange} placeholder="Name" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Type</label>

                        <div className="col-sm-10">
                            <select value={type} name="type" onChange={this.handleChange}>
                                <option value="classification">Classification</option>
                                <option value="regression">Regression</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Version</label>

                        <div className="col-sm-10">
                            <input value={version} type="text" className="form-control" id="inputVersion"
                                name="version" onChange={this.handleChange} placeholder="0.0.0" />
                        </div>
                    </div>

                </div>

                <div className="box-footer">
                    <button type="submit" className="btn btn-default" onClick={this.handleCancel}>Cancel</button>
                    <button type="submit" className="btn btn-info pull-right" onClick={this.handleSave}>Save</button>
                </div>

            </form>
        );
    }
}

ModelForm.propTypes = {
    model: PropTypes.object,
    keywordsString: PropTypes.string,
    categories: PropTypes.array,
    fetching: PropTypes.bool,
    handleAnalyze: PropTypes.func.isRequired,
    handleAnalyticsEvent: PropTypes.func,
};

export default ModelForm;