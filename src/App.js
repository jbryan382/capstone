import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Streams from './components/Streams'
import Streamer from './components/Streamer'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/streams" component={Streams} />
            <Route exact path="/:streamer" component={Streamer} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
