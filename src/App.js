import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={Login} />
            <Route exact path="/:streamer" component={Streamer} /> */}
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
