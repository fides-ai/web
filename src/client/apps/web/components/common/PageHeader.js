/**
 * Created by asafam on 01/03/2019.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import {Link, IndexLink} from 'react-router';

const PageHeader = ({title, subtitle}) => {
    return (
        // <nav>
        //     <IndexLink to="/"
        //                activeClassName="active">Home</IndexLink>
        //     {" | "}
        //     <Link to="/campaigns" activeClassName="active">Campaigns</Link>
        // </nav>
        // <!-- Content Header (Page header) -->
        <section className="content-header">
            <h1>
                {title}
                <small>{subtitle}</small>
            </h1>
            {/*<ol className="breadcrumb">*/}
                {/*<li><a href="#"><i className="fa fa-dashboard"></i> Level</a></li>*/}
                {/*<li className="active">Here</li>*/}
            {/*</ol>*/}
        </section>
    );
};

PageHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
};

function mapStateToProps(state, ownProps) {
    const {title, subtitle} = state.pageHeader || {};
    return {title, subtitle};
}

export default connect(mapStateToProps)(PageHeader);
