import React, { useState } from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Comment from './comment.component';

const GET_COMMENTS = gql`
  {
    comments {
      id
      data {
        body
      }
    }
  }
`;

const Comments = () => {
  const [selected, setSelected] = useState('');
  const { loading, error, data } = useQuery(GET_COMMENTS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const { comments } = data;
  return (
    <ul>
      {comments.map((comment) => {
        if (comment.id === selected) {
          return (
            <Comment
              key={comment.id}
              comment={comment}
              active={true}
              setSelected={setSelected}
            />
          );
        } else
          return (
            <Comment
              key={comment.id}
              comment={comment}
              active={false}
              setSelected={setSelected}
            />
          );
      })}
    </ul>
  );
};

export default Comments;
