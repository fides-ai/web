/**
 * Create by asafam on 1/15/2019.
 */
'use strict';

import React from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { newModelPageLoaded } from '../../actions/app';
import { fetchModel, createModel, updateModel } from '../../actions/models';
import { getOrganization } from '../../reducers';


class ModelsPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidMount() {
        const { id, model, organizationId } = this.props;
        if (id && !model) {
            this.props.actions.fetchModel(id, organizationId)
                .then(model => {
                    this.setState({ model })
                })
                .catch(err => {
                    // todo!
                });
        }

        this.props.actions.newModelPageLoaded();
    }

    handleSave(model) {
        const { organizationId } = this.props;
        saveModelPromise = model.id ?
            this.props.actions.updateModel(model.id, model, organizationId) :
            this.props.actions.createModel(model, organizationId);
        saveModelPromise
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
        const { model } = this.props;

        return (
            <div className="models-page col-md-12">
                <h1>Models</h1>
                <ModelForm model={model} onCancel={this.handelCancel} onSave={this.handleSave} />
            </div>
        );
    }
}

ModelsPage.propTypes = {
    id: propTypes.string,
    model: propTypes.object,
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