import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
  render() {
    return (
      <>
        <h1 className="LoginTitle">Title/Logo Here</h1>
        <section className="LoginWindow">
          <h3>Login:</h3>
          <input placeholder="Username" />
          <input placeholder="Password" />
          <Link to="Streams">Login</Link>
        </section>
        <footer>
          <h4>Copyright Information and Stuff.</h4>
          <h5>Made with 💚 at SDG</h5>
        </footer>
      </>
    )
  }
}

export default Login
