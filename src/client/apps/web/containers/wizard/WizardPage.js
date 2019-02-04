/**
 * Creted by asafam on 1/31/2019.
 */
'use strict';

import React from 'react';
import Wizard from '../../components/wizard/Wizard';


class WizardPage extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    handleSelectModel(index) {

    }

    render() {
        return (
            <div className="wizard-page row">
                <div className="col-md-12">
                    <Wizard models={models} predictions={predictions}>
                    </Wizard>
                </div>
            </div>
        );
    }

}

WizardPage.propTypes = {
};

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        models: getDemoModels(state),
        predictions: getDemoModelPredictions(state),
        fetching: isFetchingDemoModels(state),
        fetchingPredictionsForModel: isFetchingDemoModelPredictions(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ wizardPageLoaded, fetchDemoModels, fetchDemoPredictionsForModel }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WizardPage);