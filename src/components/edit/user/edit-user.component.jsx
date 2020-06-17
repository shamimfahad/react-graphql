import React from 'react';

import Button from '../../../img/button.svg';
import Close from '../../../img/close-outline.svg';

const EditUser = () => {
  return (
    <div className="edit">
      <div className="edit-top">
        <p>Edit a User</p>
        <a href="/" className="btn">
          {' '}
          <img src={Button} alt="" /> Update
        </a>
      </div>
      <div className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" defaultValue="John Doe" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            defaultValue="Dhaka, Dhaka, Bangladesh"
          />
        </div>
        <div className="form-group">
          <label htmlFor="search">Posts</label> <br />
          <small>Search Posts And Tag</small> <br />
          <input type="search" name="search" id="search" />
        </div>
        <div className="results">
          <span>
            Building A Huge Site With React
            <img src={Close} alt="close" />
          </span>
          <span>
            This is my second post
            <img src={Close} alt="close" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
