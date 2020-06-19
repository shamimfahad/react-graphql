import React, { useState } from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Post from './post.component';

const GET_POSTS = gql`
  {
    posts {
      id
      data {
        body
        title
      }
    }
  }
`;

const Posts = () => {
  const [selected, setSelected] = useState('');
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const { posts } = data;

  return (
    <ul>
      {posts.map((post) => {
        if (post.id === selected) {
          return (
            <Post
              key={post.id}
              post={post}
              active={true}
              setSelected={setSelected}
            />
          );
        } else
          return (
            <Post
              key={post.id}
              post={post}
              active={false}
              setSelected={setSelected}
            />
          );
      })}
    </ul>
  );
};

export default Posts;
