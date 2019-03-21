import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import mainList from './components/MainList'
import Doc from './components/Document'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/mainList" component={mainList} />
            <Route exact path="/:Doc" component={Doc} />
            {/* Add credits page for the API's that I have utilized. */}
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
