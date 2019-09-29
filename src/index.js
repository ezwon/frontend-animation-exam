import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route} from 'react-router-dom';
import "./app.less";

import Navigation from "./component/navigation";
import Home from "./component/home";

const Container = () => {
  return (
    <div id="main-wrapper">
      <Navigation/>
      <Home/>
    </div>
  );
};

const App = () => {
  return (
    <HashRouter basename='/'>
      <Route
        exact
        path="/"
        render={() => <Container containerId='home_container'/>}
      />
    </HashRouter>
  )
};

ReactDOM.render(<App/>, document.getElementById("app"));
