import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Button from '../../../img/button.svg';
import Close from '../../../img/close-outline.svg';

const EditPost = () => {
  return (
    <div className="edit">
      <div className="edit-top">
        <p>Edit a Post</p>
        <a href="/" className="btn">
          {' '}
          <img src={Button} alt="" /> Update
        </a>
      </div>
      <div className="form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue="Building a huge site with React"
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <CKEditor
            editor={ClassicEditor}
            data="<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
            voluptas corporis beatae necessitatibus quod a excepturi facere
            quibusdam explicabo fuga at quam ipsam accusantium illum fugit
            dolorum? Similique, incidunt asperiores aliquid nulla aut obcaecati
            temporibus. Quis eaque modi accusantium illum.</p>"
            onInit={(editor) => {
              // You can store the "editor" and use when it is needed.
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
        </div>
        <div className="form-group">
          <label htmlFor="search">Comments</label> <br />
          <small>Search Comments And Assign It To The Post</small> <br />
          <input type="search" name="search" id="search" placeholder="" />
        </div>
        <div className="results">
          <span>
            the post is very helpful
            <img src={Close} alt="close" />
          </span>
          <span>
            would love to hear more..
            <img src={Close} alt="close" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
