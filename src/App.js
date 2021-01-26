import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Resume from "./components/pages/Resume";
import Layout from "./components/pages/Layout";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/layout">
            <Layout />
          </Route>
          <Route path="/">
            <Resume />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
