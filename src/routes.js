import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import NewEventPage from './components/events/NewEventPage';

import requireAuth from './utils/requireAuth';

const routes = () => (
	<Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/new-event" component={requireAuth(NewEventPage)} />
	</Switch>
);

export default routes;
