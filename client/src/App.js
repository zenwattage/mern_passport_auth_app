import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';

import NavBar from "./components/NavBar";

export default class App extends Component {


  render() {
    // JSX
    return (
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="*" component={NotFound} />

      </Router >

    );
  }
}