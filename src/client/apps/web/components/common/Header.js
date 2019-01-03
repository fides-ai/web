/**
 * Created by asafam on 01/03/2019.
 */

'use strict';

import React from 'react';
import {loadKey} from "../../../../services/local-storage";

const Header = () => {
    const user = loadKey('user');
    const username = user && user.email || 'Guest';
    return (
        <header className="main-header">

            <a href="/" className="logo">
                <span className="logo-mini">
                <img
                    src=""
                    style={{"width": "40px", "height": "auto"}}/>
            </span>
                <span className="logo-lg">
                <img
                    src=""
                    style={{"width": "80px", "height": "auto"}}/>
                <span className="beta" style={{"fontSize": "10px", "marginLeft": "3px"}}>beta</span>
            </span>
            </a>

            <nav className="navbar navbar-static-top" role="navigation">
                <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className="sr-only">Toggle navigation</span>
                </a>
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        <li className="user user-menu">
                            <a>
                                <i className="fa fa-user-circle" aria-hidden="true"></i>
                                <span className="hidden-xs">{username}</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;


