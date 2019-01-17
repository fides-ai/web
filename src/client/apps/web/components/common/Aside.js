/**
 * Created by asafam on 01/03/2019.
 */

'use strict';


const Aside = ({ user, onLogout }) => {
    if (!user || !user.loggedIn) {
        // return (<Redirect to={{pathname: '/login'}}/>); 
    }

    return (
        <div className="aside">
            <aside className="control-sidebar control-sidebar-dark">
                <ul className="sidebar-menu">
                    <li>
                        <a href="#" onClick={onLogout}><i className="fa fa-sign-out"></i>
                            <span>Log out</span></a>
                    </li>
                </ul>
            </aside>
            <div className="control-sidebar-bg"></div>
        </div>
    );
};