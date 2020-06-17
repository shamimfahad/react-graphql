import React from 'react';

import { Link } from 'react-router-dom';

import Blog from '../../img/carbon_blog.svg';

const Comments = () => {
  return (
    <ul>
      <li className="selected">
        <Link to="/crud/comments/1">
          <img src={Blog} alt="" /> this post is very helpful
        </Link>
      </li>
      <li>
        <Link to="/crud/comments/2">
          <img src={Blog} alt="" /> would love to hear more
        </Link>
      </li>
    </ul>
  );
};

export default Comments;
