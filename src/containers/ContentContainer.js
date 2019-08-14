import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import AboutMe from "../components/AboutMe";

const ContentContainer = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
      <Route path="/about" component={AboutMe} />
    </Switch>
  );
};

export default ContentContainer;
