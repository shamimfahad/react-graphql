import React from 'react';

import Blog from '../../img/carbon_blog.svg';
import { Link } from 'react-router-dom';

const User = ({ user, active, setSelected }) => {
  const handleClick = () => {
    // setting active class
    setSelected(user.id);
  };

  return (
    <li className={active ? 'selected' : null} onClick={handleClick}>
      <Link to={`/crud/users/${user.id}`}>
        <img src={Blog} alt="" /> {user.data.name}
      </Link>
    </li>
  );
};

export default User;
