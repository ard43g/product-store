import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";

import store from "./store";

import AppWrapper from "./components/app-wrapper";
import ErrorBoundry from "./components/error-boundry";

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <Router basename="/">
                <AppWrapper />
            </Router>
        </ErrorBoundry>
    </Provider>,
    document.getElementById("root")
);
