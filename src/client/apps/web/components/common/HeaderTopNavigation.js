/**
 * Created by asafam on 01/03/2019.
 */
'use strict';

import React from 'react';


const HeaderTopNavigation = ({ user }) => {
    const username = user && user.email || 'Guest';
    return (
        <header className="main-header">

            <nav className="navbar navbar-static-top">
                <div className="container">
                    <div className="navbar-header">
                        <a href="/" className="navbar-brand logo"><b>Fides</b></a>
                    </div>

                    <div className="collapse navbar-collapse pull-left" id="navbar-collapse">
                        <ul className="nav navbar-nav"></ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderTopNavigation;


