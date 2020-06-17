import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Button from '../../../img/button.svg';
import Close from '../../../img/close-outline.svg';

const EditComment = () => {
  return (
    <div className="edit">
      <div className="edit-top">
        <p>Edit a comment</p>
        <a href="/" className="btn">
          {' '}
          <img src={Button} alt="" /> Update
        </a>
      </div>
      <div className="form">
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <CKEditor
            editor={ClassicEditor}
            data="<p>this post is very helpful</p>"
            onInit={(editor) => {
              // console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              // const data = editor.getData();
              // console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              // console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              // console.log('Focus.', editor);
            }}
          />
          {/* <textarea
            name="body"
            id="body"
            cols="30"
            rows="10"
            defaultValue="this post is very helpful"
          ></textarea> */}
        </div>
        <div className="form-group">
          <label htmlFor="search">Post</label> <br />
          <small>Search a post and tag this comment</small> <br />
          <input type="search" name="search" id="search" placeholder="" />
        </div>
        <div className="results">
          <span>
            Building a site with React
            <img src={Close} alt="close" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default EditComment;
