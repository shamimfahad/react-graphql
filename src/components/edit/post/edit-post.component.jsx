import React, { useState } from 'react';

import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import Button from '../../../img/button.svg';
import Close from '../../../img/close-outline.svg';

const UPDATE_POST = gql`
  mutation UpdatePost(
    $_id: String!
    $payload: post_input_payload!
    $connect: post_input_connection_payload!
    $disconnect: post_input_disconnection_payload!
  ) {
    updatePost(
      _id: $_id
      payload: $payload
      connect: $connect
      disconnect: $disconnect
    ) {
      id
      data {
        body
        title
      }
      comment {
        id
        data {
          body
        }
      }
    }
  }
`;

const EditPost = ({ post, comments }) => {
  const {
    id,
    data: { body, title },
  } = post;

  const [postCredentials, setPostCredentials] = useState({
    body,
    title,
  });

  const [connectComment, setConnectComment] = useState({
    comment_ids: [],
  });
  const [disconnectComment, setDisconnectComment] = useState({
    comment_ids: [],
  });

  const [isLoading, setLoading] = useState(false);
  const [errorText, setError] = useState('');

  const [updateUser, { loading: postLoading, error: postError }] = useMutation(
    UPDATE_POST
  );

  const handleSubmit = (e) => {
    // e.preventDefault();
    const { body, title } = postCredentials;
    if (body || title) {
      updateUser({
        variables: {
          _id: id,
          payload: postCredentials,
          connect: connectComment,
          disconnect: disconnectComment,
        },
      });
      setLoading(postLoading);
      setError(postError);
    } else alert('nothing to update');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostCredentials({ ...postCredentials, [name]: value });
  };

  const handleClick = (e, comment) => {
    e.preventDefault();
    alert(`${comment.data.body} will be assigned to this post`);
    setConnectComment({ comment_ids: [comment.id] });
  };

  const handleRemove = (e, comment) => {
    e.preventDefault();
    alert(`${comment.data.body} will be removed from this post`);
    setDisconnectComment({ comment_ids: [comment.id] });
  };

  return (
    <div className="edit">
      <form className="form" onSubmit={handleSubmit}>
        <div className="edit-top">
          <p>Edit a Post</p>
          <button type="submit" className="btn">
            <img src={Button} alt="" /> Update
          </button>
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea
            name="body"
            id="body"
            onChange={handleChange}
            defaultValue={body}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="search">Comments</label> <br />
          <small>Search Comments And Assign It To The Post</small> <br />
          <input type="search" name="search" id="search" placeholder="" />
        </div>
        <div className="results">
          {comments.map((comment) => {
            return (
              <span key={comment.id}>
                <p
                  style={{ cursor: 'pointer' }}
                  onClick={(e) => handleClick(e, comment)}
                >
                  {comment.data.body}
                </p>
                <img
                  src={Close}
                  alt="close"
                  onClick={(e) => handleRemove(e, comment)}
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

export default EditPost;
