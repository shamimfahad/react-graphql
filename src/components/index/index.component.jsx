import React from 'react';

import './index.styles.scss';

import Sidebar from '../sidebar/sidebar.component';
import Info from '../info/info.component';
import Edit from '../edit/edit.component';

const Index = (props) => {
  return (
    <div className="container">
      <Sidebar />
      <Info />
      <Edit />
    </div>
  );
};

export default Index;
