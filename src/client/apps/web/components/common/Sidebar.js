/**
 * Created by asafam on 01/03/2019.
 */

'use strict';

import React from 'react';
import '../../stylesheets/sidebar.scss';

const Sidebar = () => {
    return (
        <aside className="main-sidebar">

            {/*<!-- sidebar: style can be found in sidebar.less -->*/}
            <section className="sidebar">

                {/*<!-- Sidebar Menu -->*/}
                <ul className="sidebar-menu">
                    {/*<!-- Optionally, you can add icons to the links -->*/}
                    <li className="active"><a href="/"><i className="fa fa-users"></i> <span>Foo</span></a></li>
                    <li><a href="#" className="disabled"><i className="fa fa-flask"></i> <span>Bar</span></a></li>
                    <li><a href="#" className="disabled"><i className="fa fa-google"></i> <span>Baz</span></a></li>
                    <li><a href="#" className="disabled"><i className="fa fa-share-alt"></i> <span>Zaphod</span></a></li>
                </ul>
                {/*<!-- /.sidebar-menu -->*/}
            </section>
            {/*<!-- /.sidebar -->*/}
        </aside>
    );
};

export default Sidebar;
