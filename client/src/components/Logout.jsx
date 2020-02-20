import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// var logout = require('express-passport-logout');

// handleSubmit = event => {
//   event.preventDefault();
//   window.localStorage.removeItem('isAuthenticated');
//  const { email, password } = this.state;
//  axios({
//    url: '/authentication/signup',
//    method: 'POST',
//    data: {
//      email,
//      password
//    }
//  })
//  .then(response => {
//    this.props.history.push('/profile');
//  })
//  .catch(error => {
//    this.setState({
//      errorMessage: error.response.data.message
//    });
//  });
// };

export default class Logout extends Component {
  handleSubmit = event => {
    const isAuthenticated = window.localStorage.getItem('isAuthenticated');

    event.preventDefault();
    window.localStorage.removeItem('isAuthenticated');

    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }
  };

  render() {
    // JSX
    return (
      <div>
        <h1>Logout Component </h1>
        <button onClick={this.handleSubmit}>Logout</button>
      </div>
    );
  }
}

// import React, { Component } from 'react';

// export default class Profile extends Component {
//   render() {
//     const isAuthenticated = window.localStorage.getItem('isAuthenticated');

//     if (!isAuthenticated) {
//       return <Redirect to="/login" />;
//     }
//     // JSX
//     return (
//       <div>
//         <h1> I am the Profile Component </h1>
//       </div>
//     );
//   }
// }
