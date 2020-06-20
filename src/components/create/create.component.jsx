import React, { useState } from 'react';

import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import './create.styles.scss';

// adding user mutation
const ADD_USER = gql`
  mutation AddUser($payload: user_input_payload!) {
    createUser(payload: $payload) {
      id
      data {
        name
        address
      }
    }
  }
`;

// adding post mutation
const ADD_POST = gql`
  mutation AddPost($payload: post_input_payload!) {
    createPost(payload: $payload) {
      id
      data {
        title
        body
      }
    }
  }
`;

// adding comment mutation
const ADD_COMMENT = gql`
  mutation AddComment($payload: comment_input_payload!) {
    createComment(payload: $payload) {
      id
      data {
        body
      }
    }
  }
`;

const Create = () => {
  const [type, setType] = useState('');

  // setting user credentials
  const [userCredentials, setUserCredentials] = useState({
    name: '',
    address: '',
  });
  // setting post credentials
  const [postDetails, setPostDetails] = useState({
    title: '',
    body: '',
  });
  // setting comment credentials
  const [commentCredentials, setCommentCredentials] = useState({
    body: '',
  });

  const [isLoading, setLoading] = useState(false);
  const [errorText, setError] = useState('');

  // setting up hooks
  const [createUser, { loading: userLoading, error: userError }] = useMutation(
    ADD_USER
  );
  const [createPost, { loading: postLoading, error: postError }] = useMutation(
    ADD_POST
  );
  const [
    createComment,
    { loading: commentLoading, error: commentError },
  ] = useMutation(ADD_COMMENT);

  const handleSelect = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    // submission and mutation
    e.preventDefault();
    e.target.reset();
    switch (type) {
      case 'post':
        createPost({ variables: { payload: postDetails } });
        setLoading(userLoading);
        setError(userError);
        break;
      case 'comment':
        createComment({ variables: { payload: commentCredentials } });
        setLoading(postLoading);
        setError(postError);
        break;
      default:
        createUser({ variables: { payload: userCredentials } });
        setLoading(commentLoading);
        setError(commentError);
        break;
    }
  };

  const handleChange = (e) => {
    // updating state on change
    const { name, value } = e.target;
    switch (type) {
      case 'comment':
        setCommentCredentials({ [name]: value });
        break;
      case 'post':
        setPostDetails({ ...postDetails, [name]: value });
        break;
      default:
        setUserCredentials({ ...userCredentials, [name]: value });
        break;
    }
  };

  let inputForm;

  if (type === 'post') {
    inputForm = (
      <div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea name="body" id="body" onChange={handleChange}></textarea>
        </div>
      </div>
    );
  } else if (type === 'comment') {
    inputForm = (
      <div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea name="body" id="body" onChange={handleChange}></textarea>
        </div>
      </div>
    );
  } else {
    inputForm = (
      <div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="create-container">
      <form onSubmit={handleSubmit} className="create-form">
        <h3>Select Type</h3>
        <select name="selectType" id="selectType" onChange={handleSelect}>
          <option value="user">User</option>
          <option value="post">Post</option>
          <option value="comment">Comment</option>
        </select>
        {inputForm}

        <input type="submit" />
      </form>

      <div>
        {isLoading ? <p>Loading...</p> : null}
        {errorText ? <p>{errorText}</p> : null}
      </div>
    </div>
  );
};

export default Create;
