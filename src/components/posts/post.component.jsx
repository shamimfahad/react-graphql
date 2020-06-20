import React from 'react';

import Blog from '../../img/carbon_blog.svg';
import { Link } from 'react-router-dom';

const User = ({ post, active, setSelected }) => {
  const handleClick = () => {
    // setting active class
    setSelected(post.id);
  };

  return (
    <li className={active ? 'selected' : null} onClick={handleClick}>
      <Link to={`/crud/posts/${post.id}`}>
        <img src={Blog} alt="" /> {post.data.title}
      </Link>
    </li>
  );
};

export default User;
