/**
 * Create by asafam on 1/15/2019.
 */
'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Models from '../../components/models/Models';
import { pages, pageLoaded } from '../../actions/app';
import { fetchModels } from '../../actions/models';
import { getOrganizationId, getModels, isFetchingModels } from '../../reducers';


class ModelsPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);
        this.handleClickNew = this.handleClickNew.bind(this);
        this.handleClickEdit = this.handleClickEdit.bind(this);
    }

    componentDidMount() {
        this.props.actions.pageLoaded(pages.MODELS_PAGE);
        this.fetchData();
    }

    fetchData() {
        const { organizationId } = this.props;
        this.props.actions.fetchModels(organizationId);
    }

    handleClick() {

    }

    handleClickNew() {
        this.props.history.push({
            pathname: `/models/new`,
        });
    }

    handleClickEdit(model) {
        this.props.history.push({
            pathname: `/models//edit/${model.slug}`,
            state: {
                model
            }
        });
    }

    render() {
        const { models, fetching } = this.props;

        return (
            <div className="models-page col-md-12">
                <h1>Models</h1>
                <Models models={models}
                    fetching={fetching}
                    onClick={this.handleClick}
                    onClickNew={this.handleClickNew}
                    onClickEdit={this.handleClickEdit} />
            </div>
        );
    }
}

ModelsPage.propTypes = {};

const mapStateToProps = (state, ownProps) => {
    const organizationId = getOrganizationId(state);
    const models = getModels(state, organizationId);
    return {
        ...ownProps,
        organizationId,
        models,
        fetching: isFetchingModels(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ pageLoaded, fetchModels }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModelsPage);