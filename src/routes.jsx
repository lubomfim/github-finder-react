import User from 'pages/User';
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:user" component={User} />
      </Switch>
    </Router>
  );
};

export default Routes;
