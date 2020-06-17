import React from 'react';

import Blog from '../../img/carbon_blog.svg';
import { Link, withRouter } from 'react-router-dom';

const Users = (props) => {
  return (
    <ul>
      <li className="selected">
        <Link to="/crud/users/1">
          <img src={Blog} alt="" /> John Doe
        </Link>
      </li>
      <li>
        <Link to="/crud/users/2">
          <img src={Blog} alt="" /> Rahmat Ali
        </Link>
      </li>
    </ul>
  );
};

export default withRouter(Users);
