import React from 'react';
import {Route, Redirect, Link, Switch} from 'react-router-dom';

import './app.css';
import TopNav from './top-nav';
import Home from './home';

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <TopNav />
        <Switch>
          <Redirect from="/home" to="/" />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;