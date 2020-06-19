import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import EditPost from './edit-post.component';

const EditUserContainer = ({ id }) => {
  const GET_POST = gql`
  {
    post(_id: "${id}") {
      id
      data {
        body
        title
      }
    }
    comments {
      id
      data {
        body
      }
    }
  }
`;

  const { loading, error, data } = useQuery(GET_POST);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const { post, comments } = data;

  return <EditPost post={post} comments={comments} />;
};

export default EditUserContainer;
