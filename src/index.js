import React from "react";
import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App";
import {Provider} from "react-redux";
import store from "./store";

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <div className="tasks-pnl">
                <App/>
            </div>
        </BrowserRouter>
    </Provider>
);

render(
    app,
    document.getElementById("root")
);
