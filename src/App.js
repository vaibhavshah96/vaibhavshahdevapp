import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Aboutme from "./Aboutme";
import Navigation from "./Navigation";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/aboutme" exact={true} component={Aboutme} />

        {/* <Route path="/categories" exact={true} component={Category} />
        <Route path="/expenses" exact={true} component={Expenses} /> */}
      </Switch>
    </Router>
  );
}
export default App;
