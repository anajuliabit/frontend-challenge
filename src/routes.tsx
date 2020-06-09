import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import List from './pages/List';

const Routes = () => (
  <BrowserRouter>
    <Route path="/" component={List} exact />
  </BrowserRouter>
);

export default Routes;
