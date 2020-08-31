import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

import Main from '../pages/app/Main';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/register" component={Register} />
  </Switch>
);

export default Routes;
