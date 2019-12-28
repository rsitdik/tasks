import React from "react";
import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App";

const app = (
    <BrowserRouter>
        <div className="tasks-pnl">
            <App/>
        </div>
    </BrowserRouter>);

render(
    app,
    document.getElementById("root"));
