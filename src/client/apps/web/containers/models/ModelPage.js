/**
 * Create by asafam on 1/15/2019.
 */
'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { modelPageLoaded } from '../../actions/app';
import { getOrganizationId, getModel } from '../../reducers';


class ModelPage extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.actions.modelPageLoaded();
    }

    render() {
        const { model } = this.props;

        return (
            <div className="model-page col-md-12">
                <h1>Models</h1>
                <Model model={model}/>
            </div>
        );
    }
}

ModelPage.propTypes = {
    id: propTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    const model = getModel(state);
    const organizationId = getOrganizationId(state);
    return {
        ...ownProps,
        model,
        organizationId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ modelPageLoaded }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModelPage);