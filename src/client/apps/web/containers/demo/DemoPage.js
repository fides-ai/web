/**
 * Creted by asafam on 01/31/2019.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Promise from 'bluebird';
import DemoWizard from '../../components/demo/DemoWizard';
import { pages, pageLoaded } from '../../actions/app';
import * as modelsActions from '../../actions/models';
import { getModels, getModelData, getModelDataExplanation, } from '../../reducers';
import { getOrganizationId } from '../../reducers/organization';
import { getModel } from '../../reducers/models';


const DEMO_ORG_ID = 0;


class DemoPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleSelectModel = this.handleSelectModel.bind(this);
        this.handleSelectData = this.handleSelectData.bind(this);

        const { mid, did } = props;
        this.state = {
            selectedModelId: mid,
            selectedDataId: did
        };
    }

    componentDidMount() {
        this.props.actions.pageLoaded(pages.DEMO_PAGE);

        const { organizationId } = this.props;
        Promise.all([
            this.props.actions.fetchModels(DEMO_ORG_ID),
            this.props.actions.fetchModels(organizationId)
        ]);
    }

    handleSelectModel(model) {
        this.setState({
            selectedModel: model,
            selectedModelId: model.id
        });

        if (model) {
            this.props.actions.fetchModelDataset(model.id);
        }
    }

    handleSelectData(model, data) {
        this.setState({
            selectedData: data,
            selectedDataId: data.id
        });

        if (model && data) {
            this.props.actions.explainModelData(model, data);
        }
    }

    render() {
        const { models, data, explanation, fetchingModels, fetchingData, fetchingExplanation } = this.props;
        const { selectedModel, selectedData } = this.state;
        return (
            <div className="wizard-page row">
                <div className="col-md-12">
                    <DemoWizard models={models}
                        data={data}
                        explanation={explanation}
                        selectedModel={selectedModel}
                        selectedData={selectedData}
                        fetchingModels={fetchingModels}
                        fetchingData={fetchingData}
                        fetchingExplanation={fetchingExplanation}
                        onSelectModel={this.handleSelectModel}
                        onSelectData={this.handleSelectData} />
                </div>
            </div >
        );
    }

}

DemoPage.propTypes = {
    mid: PropTypes.string, // model id
    did: PropTypes.string, // data id
};

const mapStateToProps = (state, ownProps) => {
    let { selectedModel, selectedModelId, selectedData, selectedDataId } = state;
    const organizationId = getOrganizationId(state);
    const models = getModels(state, organizationId).concat(getModels(state, DEMO_ORG_ID));
    selectedModel = selectedModel || getModel(state, selectedModelId);
    const dataset = getModelDataset(state, selectedModel.id);
    selectedData = selectedData || ;
    const explanation = getModelDataExplanation(state, selectedModel.id, selectedData);
    const nextState = {
        ...ownProps,
        organizationId,
        models,
        dataset,
        explanation,
        fetchingModels: isFetchingModels(state),
        fetchingData: isFetchingModelData(state, selectedModelId),
        fetchingExplanation: isFetchingModelDataExplanation(state, selectedModelId),
    };
    return nextState;
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ pageLoaded, ...modelsActions }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoPage);