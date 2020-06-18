import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/nav/navbar.component';
import Index from './components/index/index.component';
import Create from './components/create/create.component';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/crud" component={Index} />
          <Route path="/create" component={Create} />
          <Route exact path="/crud/:directory?" component={Index} />
          <Route path="/crud/:directory/:id" component={Index} />
          <Redirect to="/crud/users" component={Index} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
