import React from 'react';

import Blog from '../../img/carbon_blog.svg';
import { Link } from 'react-router-dom';

const User = ({ comment, active, setSelected }) => {
  const handleClick = () => {
    setSelected(comment.id);
  };

  return (
    <li className={active ? 'selected' : null} onClick={handleClick}>
      <Link to={`/crud/comments/${comment.id}`}>
        <img src={Blog} alt="" /> {comment.data.body}
      </Link>
    </li>
  );
};

export default User;
