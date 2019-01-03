/**
 * Created by asafam on 01/03/2019.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';
import Aside from './Aside';

class Layout extends React.Component {

    render() {
        return (
            <div className="wrapper">
                {/*Main Header*/}
                <Header/>

                {/*Left side column. contains the logo and sidebar*/}
                <Sidebar/>
                {/*Content Wrapper. Contains page content*/}
                <Content>

                    {this.props.children}

                </Content>

                {/*Main Footer*/}
                <Footer/>

                {/*Control Sidebar*/}
                <Aside/>
            </div>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.object
};

export default Layout;