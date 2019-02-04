/**
 * Created by asafam on 02/04/2019.
 */
'use strict';

import React from 'react';


class Wizard extends React.Component {
    redner() {
        const { onSelectModel, onSelectPrediction } = this.props;
        const selectModelTitle = 'Select Model';
        const selectPredictionTitle = 'Select prediction to explain';

        return (
            <div className="wizard">
                <Accordion allowMultiple={false} openNextAccordionItem={true}>
                    <WizardStep className="model-step" title={selectModelTitle} expanded={expanded}>
                        <ModelSelectionBox models={models}
                            onSelect={onSelectModel} />
                    </WizardStep>
                    <WizardStep className="prediction-step" title={selectPredictionTitle} expanded={expanded}>
                        <PredictionSelectionBox input={input} predictions={predictions}
                            onSelect={onSelectPrediction} />
                    </WizardStep>
                </Accordion>
            </div>
        );
    }
}