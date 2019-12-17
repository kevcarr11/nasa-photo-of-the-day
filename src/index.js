import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router  } from "react-router-dom";
// import "node_modules/video-react/dist/video-react.css"



ReactDOM.render(
<Router>
    <App />
</Router>, document.getElementById("root"));
