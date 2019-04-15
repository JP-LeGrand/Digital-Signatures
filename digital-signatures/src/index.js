import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createAppState } from "./Shared/States/AppState";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "react-router-dom";
import history from "./history";
import "roboto-fontface";

ReactDOM.render(
    <Provider store={createAppState()}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);
