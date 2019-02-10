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
import 'react-accessible-accordion/dist/fancy-example.css';

const DemoWizard = ({ models, dataset, explanation, selectedModel, selectedData, fetchingModels, fetchingData, fetchingExplanation, onSelectModel, onSelectData }) => {
    const modelsStepTitle = selectedModel ? selectedModel.name : 'Choose a model';
    const modelDatasetStepTitle = selectedModel ? selectedModel.name : 'Choose a prediction to explain';
    const modelExplanationTitle = 'Explanation';
    const modelsFormExpanded = !selectedModel;
    const modelDatasetFormExpanded = selectedModel;
    const explainExpanded = selectedModel && selectedData;

    return (
        <div className="wizard">
            <h1>Hello World</h1>

            <Accordion>
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


            {/* <Accordion allowMultiple={false} openNextAccordionItem={true}>

                <DemoWizardStep className="models-step" title={modelsStepTitle} expanded={modelsFormExpanded}>
                    <ModelsForm models={models}
                        selectedModel={selectedModel}
                        onSelect={onSelectModel}
                        fetching={fetchingModels} />
                </DemoWizardStep>

                <DemoWizardStep className="model-data-step" title={modelDatasetStepTitle} expanded={modelDatasetFormExpanded}>
                    <ModelDatasetForm dataset={dataset}
                        selectedData={selectedData}
                        onSelect={onSelectData}
                        fetching={fetchingData} />
                </DemoWizardStep>

                <DemoWizardStep className="explain-step" title={modelDataFormTitle} expanded={explainExpanded}>
                    <ExplainPanel explanation={explanation}
                        model={selectedModel}
                        data={selectedData}
                        fetching={fetchingExplanation} />
                </DemoWizardStep>

            </Accordion> */}
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