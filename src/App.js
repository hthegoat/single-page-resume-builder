import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Resume from "./components/pages/Resume";
import Layout from "./components/features/layout/Layout";
import EditRatedDescription from "./components/features/ratedDescription/EditRatedDescription";
import DescriptionEditor from "./components/molecules/DescriptionEditor";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/layout">
            <Layout />
          </Route>
          <Route path="/description">
            <DescriptionEditor />
          </Route>
          <Route path="/ratedDescription">
            <EditRatedDescription />
          </Route>
          <Route path="/">
            <Resume />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
