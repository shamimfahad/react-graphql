import React, { useState } from 'react';

import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import Button from '../../../img/button.svg';
import Close from '../../../img/close-outline.svg';

const UPDATE_COMMENT = gql`
  mutation UpdateComment(
    $_id: String!
    $payload: comment_input_payload!
    $connect: comment_input_connection_payload!
    $disconnect: comment_input_disconnection_payload!
  ) {
    updateComment(
      _id: $_id
      payload: $payload
      connect: $connect
      disconnect: $disconnect
    ) {
      id
      data {
        body
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

const EditComment = ({ comment, posts }) => {
  const {
    id,
    data: { body },
  } = comment;

  const [commentCredentials, setCommentCredentials] = useState({
    body,
  });
  const [connectPost, setConnectPost] = useState({
    post_id: [],
  });
  const [disconnectPost, setDisconnectPost] = useState({
    post_id: [],
  });

  const [searchText, setSearchText] = useState('');

  const [isLoading, setLoading] = useState(false);
  const [errorText, setError] = useState('');

  const [
    updateComment,
    { loading: commentLoading, error: commentError },
  ] = useMutation(UPDATE_COMMENT);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentCredentials({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentCredentials) {
      updateComment({
        variables: {
          _id: id,
          payload: commentCredentials,
          connect: connectPost,
          disconnect: disconnectPost,
        },
      });
      setLoading(commentLoading);
      setError(commentError);
    } else alert('nothing to update');
  };

  const handleClick = (e, post) => {
    e.preventDefault();
    alert(`this comment will be added to this ${post.data.title} `);
    setConnectPost({ post_id: [post.id] });
  };

  const handleRemove = (e, post) => {
    e.preventDefault();
    alert(`this comment will be removed from this ${post.data.title} `);
    setDisconnectPost({ post_id: [post.id] });
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredPosts = posts.filter((post) =>
    post.data.body.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="edit">
      <form className="form" onSubmit={handleSubmit}>
        <div className="edit-top">
          <p>Edit a comment</p>
          <button type="submit" className="btn">
            <img src={Button} alt="" /> Update
          </button>
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
          <label htmlFor="search">Post</label> <br />
          <small>Search a post and tag this comment</small> <br />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            onChange={handleSearch}
          />
        </div>
        <div className="results">
          {filteredPosts.map((post) => {
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

export default EditComment;
