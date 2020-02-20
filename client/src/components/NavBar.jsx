import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={
            window.location.pathname === '/' ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/signup"
          className={
            window.location.pathname === '/signup'
              ? 'nav-link active'
              : 'nav-link'
          }
        >
          Signup
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/login"
          className={
            window.location.pathname === '/login'
              ? 'nav-link active'
              : 'nav-link'
          }
        >
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/logout"
          className={
            window.location.pathname === '/logout'
              ? 'nav-link active'
              : 'nav-link'
          }
        >
          Logout
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;
