/**
 * Creted by asafam on 01/31/2019.
 */
'use strict';

import React from 'react';
import DemoWizard from '../../components/demo/DemoWizard';
import { pages, pageLoaded } from '../../actions/app';
import { fetchDemoModels, fetchDemoModelData, explainModelData } from '../../actions/demo';


class DemoPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleSelectModel = this.handleSelectModel.bind(this);
        this.handleSelectData = this.handleSelectData.bind(this);
    }

    componentDidMount() {
        this.props.actions.pageLoaded(pages.DEMO_PAGE);
        this.props.actions.fetchDemoModels();
    }

    handleSelectModel(model) {
        if (model) {
            this.props.actions.fetchDemoModelData(model.id);
        }
    }

    handleSelectData(model, data) {
        if (model && data) {
            this.props.actions.explainModelData(model.id, data)
        }
    }

    render() {
        const { models, data, explanation, selectedModel, selectedData, fetchingModels, fetchingData, fetchingExplanation } = this.props;
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
    selectedModelId: PropTypes.string,
    selectedDataId: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        models: getDemoModels(state),
        data: getDemoModelData(state),
        explanation: getModelDataExplanation(state),
        fetchingModels: isFetchingDemoModels(state),
        fetchingData: isFetchingDemoModelData(state),
        fetchingExplanation: isFetchingExplanation(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ pageLoaded, fetchDemoModels, fetchDemoModelData, explainModelData }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoPage);