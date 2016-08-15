import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import AppContainer from './components/AppContainer';
import HomeComponent from './components/Home';
import UIComponent from './components/UI';
import DevComponent from './components/Dev';
import DevFeature from './components/DevFeature';
import UIFeature from './components/UIFeature';

render((
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={HomeComponent} />
      <Route path="/ui" component={UIComponent} />
      <Route path="/ui/:featureName" component={UIFeature} />
      <Route path="/dev" component={DevComponent} />
      <Route path="/dev/:featureName" component={DevFeature} />
    </Route>
  </Router>
), document.getElementById('root'));
