/**
 * Created by asafam on 01/03/2019.
 */

'use strict';

import React from 'react';


const Context = React.createContext();

class AnalyticsContext extends React.Component {

    constructor(props) {
        super(props);

        const updateContext = (newContext) => {
            this.setState(state => ({
                context: {...state.context, ...newContext}
            }));
        };

        this.state = {
            context: null,
            updateContext,
        };
    }

    render() {
        const {consumer, component: Component, ...rest} = this.props;

        return consumer ? (
                <Context.Consumer>
                    {
                        analytics => <Component {...rest} analytics={analytics}/>
                    }
                </Context.Consumer>
            ) :
            (
                <Context.Provider value={this.state}>
                    <Component {...rest} />
                </Context.Provider>
            )
    }
}

export const withAnalytics = (Component, consumer = true) => (props) => (
    <AnalyticsContext {...props} consumer={consumer} component={Component}/>
);
