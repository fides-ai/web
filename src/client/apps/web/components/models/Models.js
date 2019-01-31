/**
 * Created by asafam on 24/07/2017.
 */

'use strict';

import React from 'react';
import ModelsList from './ModelsList';
import '../../stylesheets/Models.scss';


const Models = ({ models, fetching, page, onClick, onClickNew, onClickEdit }) => {
    return (
        <div className="models">
            <ModelsList models={models} fetching={fetching} page={page}
                onClick={onClick} onClickNew={onClickNew} onClickEdit={onClickEdit} />
        </div>
    );
};

export default Models;
