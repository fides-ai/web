/**
 * Created by asafam on 01/03/2019.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from './PageHeader';


class Content extends React.Component {

    componentDidMount() {

        // fix fox AdminLTE issue with resize of content-wrapper
        // https://github.com/almasaeed2010/AdminLTE/issues/597
        setTimeout(() => {
            $('body').layout('fix');
        }, 0);
        // end fix

    }

    render() {
        return (
            <div className="content-wrapper">
                <PageHeader/>

                {/*<!-- Main content -->*/}
                <section className="content">
                    {/*<!-- Your Page Content Here -->*/}
                    {this.props.children}
                </section>
            </div>
        );
    }
}

Content.propTypes = {
    children: PropTypes.object.isRequired
};

export default Content;

