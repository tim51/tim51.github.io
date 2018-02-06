import React from 'react'
import {Route} from 'react-router-dom'

import '../css/app.css'
import TopNav from './top-nav'
import Home from './home'
import Create from './create'
import Quiz from './quiz'

class App extends React.Component {

  render() {
    return (
      <div className="app-wrapper">
        <TopNav />
        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/create" component={Create} />
      </div>
    );
  }
}

export default App