import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/auth/Login';

import Main from '../pages/app/Main';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Login} />
  </Switch>
);

export default Routes;
