import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import EditUser from './edit-user.component';

const EditUserContainer = ({ id }) => {
  const GET_USER = gql`
  {
    user(_id: "${id}") {
      id
      data {
        name
        address
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

  const { loading, error, data } = useQuery(GET_USER);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const { user, posts } = data;

  return <EditUser user={user} posts={posts} />;
};

export default EditUserContainer;
