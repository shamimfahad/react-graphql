import React from 'react';

import './sidebar.styles.scss';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li className="selected">
          <Link to="/crud/users">Users</Link>
        </li>
        <li>
          <Link to="/crud/posts">Posts</Link>
        </li>
        <li>
          <Link to="/crud/comments">Comments</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
