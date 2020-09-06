import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

import Main from '../pages/app/Main';

import PrivateRoute from './PrivateRoute';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" exact component={Login} />
    <Route path="/register" component={Register} />
    <PrivateRoute path="/" component={Main} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
