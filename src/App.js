import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/nav/navbar.component';
import Index from './components/index/index.component';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/crud" component={Index} />
          <Route
            path="/blank"
            render={() => {
              return <div>Blank</div>;
            }}
          />
          <Route
            exact
            path="/crud/:directory?"
            render={({ match }) => <Index match={match} />}
          />
          <Route
            path="/crud/:directory/:id"
            render={({ match }) => <Index match={match} />}
          />
          <Redirect to="/crud" component={Index} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
