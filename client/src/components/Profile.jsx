import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

export default class Profile extends Component {
  render() {
    const isAuthenticated = window.localStorage.getItem('isAuthenticated');

    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }
    // JSX
    return (
      <div>
        <h1> I am the Profile Component </h1>
      </div>
    );
  }
}
