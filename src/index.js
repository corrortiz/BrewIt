import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import ReduxPromise from "redux-promise";

import "./assets/css/index.css";

import LandingPage from "./routs/landingPage";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;

console.log(language);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <LandingPage />
    </Provider>,
    document.querySelector('#container'));

