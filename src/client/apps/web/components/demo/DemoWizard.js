/**
 * Created by asafam on 02/04/2019.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import DemoWizardItem from './DemoWizardItem';
import ModelsForm from './ModelsForm';
import ModelDatasetForm from './ModelDatasetForm';
import ExplainPanel from './ExplanationPanel';
import { Accordion } from 'react-accessible-accordion';
import '../../stylesheets/Demo.scss';

const DemoWizard = ({ models, dataset, explanation, selectedModel, selectedData, fetchingModels, fetchingData, fetchingExplanation, onSelectModel, onSelectData }) => {
    const modelsStepTitle = selectedModel ? selectedModel.name : 'Choose a model';
    const modelDatasetStepTitle = 'Choose a prediction to explain';
    const modelExplanationTitle = 'Explanation';
    const modelsFormExpanded = !selectedModel;
    const modelDatasetFormExpanded = !!selectedModel;
    const explainExpanded = !!(selectedModel && selectedData);

    return (
        <div className="wizard">
            <div className="col-md-offset-2 col-md-8">
                <div className="box box-solid">
                    <div className="box-header">

                    </div>
                    <div className="box-body">
                        <Accordion accordion={false}>
                            <DemoWizardItem className="models-step" title={modelsStepTitle} expanded={modelsFormExpanded}>
                                <ModelsForm models={models}
                                    selectedModel={selectedModel}
                                    onSelect={onSelectModel}
                                    fetching={fetchingModels} />
                            </DemoWizardItem>

                            <DemoWizardItem className="model-data-step" title={modelDatasetStepTitle} expanded={modelDatasetFormExpanded}>
                                <ModelDatasetForm dataset={dataset}
                                    selectedData={selectedData}
                                    onSelect={onSelectData}
                                    fetching={fetchingData} />
                            </DemoWizardItem>

                            <DemoWizardItem className="explain-step" title={modelExplanationTitle} expanded={explainExpanded}>
                                {explanation &&
                                    <ExplainPanel explanation={explanation}
                                        model={selectedModel}
                                        data={selectedData}
                                        fetching={fetchingExplanation} />
                                }
                            </DemoWizardItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}

DemoWizard.propTypes = {
    models: PropTypes.array,
    dataset: PropTypes.array,
    explanation: PropTypes.object,
    selectedModel: PropTypes.object,
    selectedData: PropTypes.object,
    fetchingModels: PropTypes.bool,
    fetchingData: PropTypes.bool,
    fetchingExplanation: PropTypes.bool,
    onSelectModel: PropTypes.func.isRequired,
    onSelectData: PropTypes.func.isRequired,
}

export default DemoWizard;