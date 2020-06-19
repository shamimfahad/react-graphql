import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import EditComment from './edit-comment.component';

const EditUserContainer = ({ id }) => {
  const GET_COMMENT = gql`
  {
    comment(_id: "${id}") {
      id
      data {
        body
      }
    }
    posts {
      id
      data {
        body
        title
      }
    }
  }
`;

  const { loading, error, data } = useQuery(GET_COMMENT);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const { comment, posts } = data;

  return <EditComment comment={comment} posts={posts} />;
};

export default EditUserContainer;
