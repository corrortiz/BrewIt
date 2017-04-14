import React from "react";
import { Router, Route, IndexRoute, browserHistory, applyRouterMiddleware } from "react-router";
import {useTransitions, withTransition} from 'react-router-transitions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import NavBar from '../containers/navBar';
import Home from './home';
import Shop from './shop';
import Account from './account';
import Cart from './cart';


export default () => {
    return (
        <Router
            history={browserHistory}
            render={applyRouterMiddleware(useTransitions({
                TransitionGroup: ReactCSSTransitionGroup,
                defaultTransition: {
                    transitionName: 'example',
                    transitionEnterTimeout: 500,
                    transitionLeaveTimeout: 300
                }
            }))}
        >
            <Route path="/" component={withTransition(NavBar)}>
                <IndexRoute component={Home}> </IndexRoute>
                <Route path='shop' name='shop' component={Shop}></Route>
                <Route path='account' name='account' component={Account}></Route>
                <Route path='cart' name='cart' component={Cart}></Route>
            </Route>
        </Router>

    );
}

