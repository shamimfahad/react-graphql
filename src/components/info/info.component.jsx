import React from 'react';

import './info.styles.scss';

import Blog from '../../img/carbon_blog.svg';
import { withRouter } from 'react-router-dom';

const Info = () => {
  return (
    <div className="info">
      <ul>
        <li className="selected">
          <img src={Blog} alt="" /> John Doe
        </li>
        <li>
          <img src={Blog} alt="" /> Rahmat Ali
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Info);
