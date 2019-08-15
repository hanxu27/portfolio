import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import AboutMe from "../components/AboutMe";
import NoMatch from "../components/NoMatch";

const ContentContainer = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={AboutMe} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default ContentContainer;
