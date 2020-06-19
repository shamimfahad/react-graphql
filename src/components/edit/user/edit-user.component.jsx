import React, { useState } from 'react';

import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import Button from '../../../img/button.svg';
import Close from '../../../img/close-outline.svg';

const UPDATE_USER = gql`
  mutation UpdateUser(
    $_id: String!
    $payload: user_input_payload!
    $connect: user_input_connection_payload!
    $disconnect: user_input_disconnection_payload!
  ) {
    updateUser(
      _id: $_id
      payload: $payload
      connect: $connect
      disconnect: $disconnect
    ) {
      id
      data {
        name
        address
      }
      post {
        id
        data {
          title
        }
      }
    }
  }
`;

const EditUser = ({ user, posts }) => {
  const {
    id,
    data: { name, address },
  } = user;

  const [userCredentials, setUserCredentials] = useState({
    name,
    address,
  });

  const [connectPost, setConnectPost] = useState({
    post_ids: [],
  });
  const [disconnectPost, setDisconnectPost] = useState({
    post_ids: [],
  });

  const [isLoading, setLoading] = useState(false);
  const [errorText, setError] = useState('');

  const [updateUser, { loading: userLoading, error: userError }] = useMutation(
    UPDATE_USER
  );

  const handleSubmit = (e) => {
    // e.preventDefault();
    const { name, address } = userCredentials;

    if (name || address) {
      updateUser({
        variables: {
          _id: id,
          payload: userCredentials,
          connect: connectPost,
          disconnect: disconnectPost,
        },
      });
      setLoading(userLoading);
      setError(userError);
    } else alert('nothing to update');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleClick = (e, post) => {
    e.preventDefault();
    alert(`${post.data.title} will be assigned to this user`);
    setConnectPost({ post_ids: [post.id] });
  };

  const handleRemove = (e, post) => {
    e.preventDefault();
    alert(`${post.data.title} will be removed from this user`);
    setDisconnectPost({ post_ids: [post.id] });
  };

  return (
    <div className="edit">
      <form className="form" onSubmit={handleSubmit}>
        <div className="edit-top">
          <p>Edit a User</p>
          <button type="submit" className="btn">
            <img src={Button} alt="" /> Update
          </button>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            defaultValue={address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="search">Posts</label> <br />
          <small>Search Posts And Tag</small> <br />
          <input type="search" name="search" id="search" />
        </div>
        <div className="results">
          {posts.map((post) => {
            return (
              <span key={post.id}>
                <p
                  style={{ cursor: 'pointer' }}
                  onClick={(e) => handleClick(e, post)}
                >
                  {post.data.title}
                </p>
                <img
                  src={Close}
                  alt="close"
                  onClick={(e) => handleRemove(e, post)}
                />
              </span>
            );
          })}
        </div>
      </form>
      {isLoading ? console.log('loading...') : null}
      {errorText ? console.log(errorText) : null}
    </div>
  );
};

export default EditUser;
