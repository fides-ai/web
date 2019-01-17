/**
 * Create by asafam on 1/15/2019.
 */
'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { newModelPageLoaded } from '../../actions/app';
import { getOrganization } from '../../reducers';


class ModelsPage extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.actions.newModelPageLoaded();
    }

    render() {
        const { organizationId, model } = this.props;

        return (
            <div className="models-page col-md-12">
                <h1>Models</h1>
                <ModelForm model={model} organizationId={organizationId} />
            </div>
        );
    }
}

ModelsPage.propTypes = {
    model: propTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
    const organizationId = getOrganization(state);
    return {
        ...ownProps,
        organizationId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ modelsPageLoaded }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModelsPage);