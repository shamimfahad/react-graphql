import React from 'react';

import { Link } from 'react-router-dom';

import './navbar.styles.scss';

const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/" className="link">
          React GraphQL
        </Link>
      </div>
      <nav>
        <ul>
          <li className="selected">
            <Link to="/crud" className="link">
              CRUD
            </Link>
          </li>
          <li>
            <Link to="/create" className="link">
              Create
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
