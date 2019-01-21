/**
 * Create by asafam on 1/15/2019.
 */
'use strict';

import React from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { newModelPageLoaded } from '../../actions/app';
import { createModel, updateModel } from '../../actions/models';
import { getOrganization } from '../../reducers';


class ModelsPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidMount() {
        this.props.actions.newModelPageLoaded();
    }

    handleSave(model) {
        const { organizationId } = this.props;
        saveModel = model.id ? this.props.actions.updateModel : this.props.actions.createModel;
        saveModel(model, organizationId)
            .then(model => this.props.history.push({
                pathname: `/models/${model.slug}`,
                state: {
                    model
                }
            }))
            .catch(err => {
                // todo: display save error
            });
    }

    handleCancel() {
        this.props.history.goBack();
    }

    render() {
        const { organizationId, model } = this.props;

        return (
            <div className="models-page col-md-12">
                <h1>Models</h1>
                <ModelForm model={model} onCancel={this.handelCancel} onSave={this.handleSave} />
            </div>
        );
    }
}

ModelsPage.propTypes = {
    model: propTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
    const organizationId = getOrganization(state);
    return {
        ...ownProps,
        organizationId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ newModelPageLoaded, updateModel, createModel }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModelsPage);