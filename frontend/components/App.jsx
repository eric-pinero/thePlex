import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import { logout } from "../actions/session_actions";
import {AuthRoute, ProtRoute} from "../util/route_util";

const App = () => (
  <div>
    <h1>Welcome to the Plex</h1>
    <Switch>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
    </Switch>
    <Link to="login">Login</Link>
  </div>
);

export default App;