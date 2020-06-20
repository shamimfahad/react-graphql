import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import User from './user.component';

const GET_USERS = gql`
  {
    users {
      id
      data {
        name
        address
      }
    }
  }
`;

const Users = () => {
  const [selected, setSelected] = useState('');

  // getting users from server
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  // setting users
  const { users } = data;

  return (
    <ul>
      {users.map((user) => {
        if (user.id === selected) {
          return (
            <User
              key={user.id}
              user={user}
              active={true}
              setSelected={setSelected}
            />
          );
        } else
          return (
            <User
              key={user.id}
              user={user}
              active={false}
              setSelected={setSelected}
            />
          );
      })}
    </ul>
  );
};

export default withRouter(Users);
