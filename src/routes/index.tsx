import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from '../pages/app/Main';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" component={Main} />
  </BrowserRouter>
);

export default Routes;
