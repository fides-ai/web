/**
 * Created by asafam on 02/04/2019.
 */
'use strict';

import React from 'react';
import { AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


const DemoWizardItem = ({ title, expanded, children }) => {
    return (
        <AccordionItem expanded={expanded}>
            <AccordionItemTitle>
                <h3>{title}</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                {children}
            </AccordionItemBody>
        </AccordionItem>
    );
}

export default DemoWizardItem;