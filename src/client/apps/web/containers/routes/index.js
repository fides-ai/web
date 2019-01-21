/**
 * Created by asafam on 01/03/2019.
 */

'use strict';

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SecuredRoute from './SecuredRoute';
import Layout from '../common/Layout';
import ModelsPage from '../models/ModelsPage';
import ModelPage from '../models/ModelPage';
import NewModelPage from '../models/NewModelPage';
import AnalyticsRouteTracker from '../../../../common/analytics/AnalyticsRouteTracker';
import {withAnalytics} from "../../../../common/analytics/AnalyticsContext";


const Routes = () => (
    <Router>
        <div>
            <Route path="/" component={AnalyticsRouteTracker}/>
            <Switch>
                {/* <Route path="/login" component={LoginPage}/> */}
                <SecuredRoute exact path="/" render={() => (
                    <Layout>
                        <Switch>
                            <Route path="/" component={ModelsPage}/>
                            <Route path="/models" component={ModelsPage}/>
                            <Route path="/models/:id" component={ModelPage}/>
                            <Route path="/models/new" component={NewModelPage}/>
                            <Route path="/models/edit/:id" component={NewModelPage}/>
                            {/* <Route path="/other/page" component={withAnalytics(OtherPage)}/> */}
                        </Switch>
                    </Layout>
                )}/>
            </Switch>
        </div>
    </Router>
);

export default Routes;