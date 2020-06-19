import React from 'react';
import { withRouter } from 'react-router-dom';

import './edit.styles.scss';

import { default as EditPost } from './post/edit-post.container';
import { default as EditUser } from './user/edit-user.container';
import { default as EditComment } from './comment/edit-comment.container';

const Edit = (props) => {
  let { directory, id } = props.match.params;

  let type = '';

  if (directory) {
    type = directory.slice(0, -1);
  }

  if (id) {
    switch (type) {
      case 'user':
        return <EditUser id={id} />;
      case 'post':
        return <EditPost id={id} />;
      case 'comment':
        return <EditComment id={id} />;
      default:
        return <div>Select something</div>;
    }
  } else return <div>Select Item To Edit</div>;
};

export default withRouter(Edit);
