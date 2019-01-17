/**
 * Created by asafam on 01/03/2019.
 */

'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getErrors} from '../reducers';
import * as actions from "../actions/app";


class Errors extends Component {
    constructor(props) {
        super(props);

        this.handleCloseError = this.handleCloseError.bind(this);
        this.getErrorMessageTitle = this.getErrorMessageTitle.bind(this);
        this.getErrorMessageText = this.getErrorMessageText.bind(this);

        const {errors, maxErrors} = props;
        this.state = {
            maxErrors: !isNaN(maxErrors) ? maxErrors : Infinity,
            errors
        };
    }

    componentWillReceiveProps(nextProps) {
        const {errors, maxErrors} = nextProps;
        this.setState({
            maxErrors: !isNaN(maxErrors) ? maxErrors : this.state.maxErrors,
            errors,
        });
    }

    handleCloseError(event) {
        event.preventDefault();
        const id = event.target.attributes.getNamedItem('data-error-id').value;
        this.props.actions.deleteError(id);
    }

    getErrorMessageTitle(error) {
        let message;
        switch (error && error.status) {
            case 404:
                message = 'We didn\'t recognize this topic. Would you like to try something else?';
                break;
            case 422:
                message = 'Sorry, something went wrong! Please try again.';
                break;
            case 500:
            default:
                message = 'Oops, something went wrong!';
                break;
        }

        return message
    }

    getErrorMessageText(error) {
        let message;
        switch (error && error.status) {
            case 404:
            case 422:
                message = error.message;
                break;
            case 500:
            default:
                message = 'We\'re working to fix it. Please try again soon.';
                break;
        }

        return message
    }

    render() {
        const {errors, maxErrors} = this.state;
        const hasErrors = errors && errors.length > 0;

        return (
            <div className="errors">
                {hasErrors && errors.slice(0, maxErrors).map((error, index) =>
                    <div className="alert alert-warning col-md-offset-1 col-md-10 col-sm-12" key={index}>
                        <button type="button" className="close" aria-hidden="true"
                                data-error-id={error.id}
                                onClick={this.handleCloseError}>×
                        </button>
                        <h4><i className="icon fa fa-warning"></i> {this.getErrorMessageTitle(error)} </h4>
                        {this.getErrorMessageText(error)}
                    </div>
                )}
            </div>
        );
    }
}

Errors.propTypes = {
    errors: PropTypes.array,
    maxErrors: PropTypes.number,
};

const mapStateToProps = (state, ownProps) => {
    const props = {
        errors: ownProps.errors || getErrors(state.errors),
    };
    return props;
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Errors);
