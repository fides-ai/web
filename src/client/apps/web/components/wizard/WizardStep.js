/**
 * Created by asafam on 02/04/2019.
 */
'use strict';

import React from 'react';


const WizardStep = ({title, expanded}) => {
    return (
        <AccordionItem title={title} expanded={expanded}>
            {this.props.children}
        </AccordionItem>
    );
}

export default WizardStep;