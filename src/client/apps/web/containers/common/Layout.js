/**
 * Created by asafam on 01/03/2019.
 */

'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Header from '../../components/common/Header';
import HeaderTopNavigation from '../../components/common/HeaderTopNavigation'
import Sidebar from '../../components/common/Sidebar';
import Content from '../../components/common/Content';
import Footer from '../../components/common/Footer';
import Aside from '../../components/common/Aside';
import { logout } from '../../actions/authentication';
import { getUser } from '../../reducers';


class Layout extends React.Component {

    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(event) {
        event.preventDefault();
        this.props.actions.logout();
    }

    render() {
        const { user, topNavigation } = this.props;

        return (
            <div className="wrapper" style={{height: "auto", minheight: "100%"}}>
                {/* Main Header */}
                {topNavigation ?
                    (<HeaderTopNavigation user={user} />) :
                    (<Header user={user} />)
                }

                {/*Left side column. contains the logo and sidebar*/}
                {!topNavigation && <Sidebar />}

                {/*Content Wrapper. Contains page content*/}
                <Content>

                    {this.props.children}

                </Content>

                {/*Main Footer*/}
                <Footer />

                {/*Control Sidebar*/}
                {/* <Aside user={user} onLogout={this.handleLogout} /> */}
            </div>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.object,
    topNavigation: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        user: getUser(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ logout }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);