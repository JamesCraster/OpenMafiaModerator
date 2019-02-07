import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
    Route,
    Link,
    BrowserRouter as Router
} from 'react-router-dom'
import Home from "./Home.jsx";
import Host from "./Host.jsx";
import Join from "./Join.jsx";
import Game from "./Game.jsx";

import * as serviceWorker from "./serviceWorker";

const router = (<Router>
    <div style={{height:"100%"}}>
        <Route exact path="/" component={Home}/>
        <Route path="/host" component={Host}/>
        <Route path="/join" component={Join}/>
        <Route path="/game" component={Game}/>
    </div>
</Router>);

ReactDOM.render(router , document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();