/**
 * Create by asafam on 1/15/2019.
 */
'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import Models from '../../components/models/Models';
import { modelsPageLoaded } from '../../actions/app';
import { fetchModels } from '../../actions/models';
import { getOrganizationId, getModels } from '../../reducers';


class ModelsPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);
        this.handleClickNew = this.handleClickNew.bind(this);
        this.handleClickEdit = this.handleClickEdit.bind(this);
    }

    componentDidMount() {
        this.props.actions.modelsPageLoaded();
        this.fetchData();
    }

    fetchData() {
        const { organizationId } = this.props;
        this.props.actions.fetchModels(organizationId);
    }

    handleClick() {

    }

    handleClickNew() {

    }

    handleClickEdit(model) {

    }

    render() {
        return (
            <div className="models-page col-md-12">
                <h1>Models</h1>
                <Models models={models}
                    onClick={this.handleClick} 
                    onClickNew={this.handleClickNew} 
                    onClickEdit={this.handleClickEdit} />
            </div>
        );
    }
}

ModelsPage.propTypes = {};

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        organizationId: getOrganizationId(state),
        models: getModels(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ modelsPageLoaded, fetchModels }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModelsPage);