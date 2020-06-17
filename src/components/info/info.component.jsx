import React from 'react';
import { withRouter } from 'react-router-dom';

import './info.styles.scss';

import Users from '../users/users.component';
import Posts from '../posts/posts.component';
import Comments from '../comments/comments.component';

const Info = (props) => {
  let { directory } = props.match.params;

  switch (directory) {
    case 'posts':
      return (
        <div className="info">
          <Posts />
        </div>
      );

    case 'comments':
      return (
        <div className="info">
          <Comments />
        </div>
      );

    default:
      return (
        <div className="info">
          <Users />
        </div>
      );
  }
};

export default withRouter(Info);
