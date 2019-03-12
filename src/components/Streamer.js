import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Streamer extends Component {
  render() {
    return (
      <>
        <h1>Title/Logo Here</h1>
        <Link to="/">Log Out</Link>
        <h1>Streamer Here</h1>
        <img
          src="https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"
          alt="Placeholder IMG"
        />
        <section>User Description/About Section</section>
        <footer>
          <h4>Copyright Information and Stuff.</h4>
          <h5>Made with 💚 at SDG</h5>
        </footer>
      </>
    )
  }
}

export default Streamer
