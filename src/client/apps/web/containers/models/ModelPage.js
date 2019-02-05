/**
 * Create by asafam on 1/15/2019.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pages, pageLoaded } from '../../actions/app';
import { getOrganizationId, getModel } from '../../reducers';


class ModelPage extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.actions.pageLoaded(pages.MODEL_PAGE);
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
    id: PropTypes.string.isRequired,
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
        actions: bindActionCreators({ pageLoaded }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModelPage);