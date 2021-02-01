import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { HomePage, AboutPage } from "../pages";

const Router = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => {
        return <Redirect to="/home" />;
      }}
    />
    <Route exact path="/home" component={HomePage} />
    <Route exact path="/about" component={AboutPage} />
  </Switch>
);

export default Router;
