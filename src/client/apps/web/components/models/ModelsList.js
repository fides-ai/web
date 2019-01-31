/**
 * Created by asafam on 01/15/2019.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ModelsListItem from './ModelsListItem';
import NewModelListItem from './ModelsListNewItem';


const ModelsList = ({ models, page, fetching, onClick, onClickNew, onClickEdit, onClickPage }) => {
    return (
        <div className="models-list row">
            <NewModelListItem onClick={onClickNew} />

            {models && models.map((model, index) =>
                <ModelsListItem model={model} key={index}
                    onClick={onClick} />
            )}
        </div>
    );
};

ModelsList.propTypes = {
    models: PropTypes.array.isRequired,
    fetching: PropTypes.bool,
    page: PropTypes.number,
    onClick: PropTypes.func.isRequired,
    onClickNew: PropTypes.func.isRequired,
    onClickEdit: PropTypes.func.isRequired,
    onClickPage: PropTypes.func
};

export default ModelsList;
