import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutTemplate from './about/AboutTemplate';
import ContactTemplate from './contact/ContactTemplate';
import Header from './header/Header';
import SkillTemplate from './skill/SkillTemplate';
import WorkTemplate from './work/WorkTemplate';

const RouterTemplate = () => {
  return<Router>
    <Header />
    <Switch>
      <Route path="/" component={AboutTemplate} exact />
      <Route path="/work" component={WorkTemplate} exact />
      <Route path="/skill" component={SkillTemplate} exact />
      <Route path="/contact" component={ContactTemplate} exact />
    </Switch>
</Router>
}

export default RouterTemplate;