import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import NotFoundPage from './components/NotFoundPage';
import HomePage from './components/HomePage';
import Login from './components/Login';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="login" component={Login}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
