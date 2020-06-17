import React from 'react';
import { Link } from 'react-router-dom';

import Blog from '../../img/carbon_blog.svg';

const Posts = () => {
  return (
    <ul>
      <li className="selected">
        <Link to="/crud/posts/1">
          <img src={Blog} alt="" /> Building a huge site with React
        </Link>
      </li>
      <li>
        <Link to="/crud/posts/2">
          <img src={Blog} alt="" /> this is my second post
        </Link>
      </li>
      <li>
        <Link to="/crud/posts/3">
          <img src={Blog} alt="" /> this is my third post
        </Link>
      </li>
      <li>
        <Link to="/crud/posts/4">
          <img src={Blog} alt="" /> this is my fourth post
        </Link>
      </li>
    </ul>
  );
};

export default Posts;
