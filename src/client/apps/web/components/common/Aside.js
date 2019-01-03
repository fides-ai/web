/**
 * Created by asafam on 01/03/2019.
 */

'use strict';

import React from 'react';
import {logout} from "../../actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {loadKey} from "../../../../services/local-storage";


class Aside extends React.Component {

    constructor(props) {
        super(props);

        this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleSignOut(event) {
        event.preventDefault();

        this.props.actions.logout();
    }

    render() {
        const user = loadKey('user');
        if (!user || !user.loggedIn) {
            // return (<Redirect to={{pathname: '/login'}}/>); 
        }

        return (
            <div>
                <aside className="control-sidebar control-sidebar-dark">
                    <ul className="sidebar-menu">
                        <li>
                            <a href="#" onClick={this.handleSignOut}><i className="fa fa-sign-out"></i>
                                <span>Log out</span></a>
                        </li>
                    </ul>
                </aside>
                <div className="control-sidebar-bg"></div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({}, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Aside);


