/**
 * Created by asafam on 02/04/2019.
 */
'use strict';

import PropTypes from 'prop-types';
import DemoWizardStep from './DemoWizardStep';
import ModelsForm from './ModelsForm';
import ModelDataForm from './ModelDataForm';
import ExplainPanel from './ExplanationPanel';


const DemoWizard = ({ models, data, explanation, selectedModel, selectedData, fetchingModels, fetchingData, fetchingExplanation, onSelectModel, onSelectData }) => {
    const modelsStepTitle = selectedModel ? selectedModel.name : 'Choose a model';
    const modelDataStepTitle = selectedModel ? selectedModel.name : 'Choose a prediction to explain';

    const modelsFormExpanded = !selectedModel;
    const modelDataFormExpanded = selectedModel;
    const explainExpanded = selectedModel && selectedData;

    return (
        <div className="wizard">
            <Accordion allowMultiple={false} openNextAccordionItem={true}>

                <DemoWizardStep className="models-step" title={modelsStepTitle} expanded={modelsFormExpanded}>
                    <ModelsForm models={models}
                        selectedModel={selectedModel}
                        onSelect={onSelectModel}
                        fetching={fetchingModels} />
                </DemoWizardStep>

                <DemoWizardStep className="model-data-step" title={modelDataStepTitle} expanded={modelDataFormExpanded}>
                    <ModelDataForm data={data}
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

            </Accordion>
        </div>
    );
}

DemoWizard.propTypes = {
    models: PropTypes.array,
    data: PropTypes.array,
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