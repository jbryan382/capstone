import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Streams extends Component {
  render() {
    return (
      <>
        <h1>Title/Logo Here</h1>
        <Link to="/">Log Out</Link>
        <section>
          <input placeholder="Search" />
          <div>🔍</div>
        </section>
        <section>
          {/* This Section will be dynamically updated for each stream */}
          <section>
            {/* The Images will be the links to the designated streamers */}
            <img
              src="https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"
              alt="Placeholder IMG"
            />
            <p>User # and Brief Live Stream</p>
          </section>
        </section>
        <footer>
          <h4>Copyright Information and Stuff.</h4>
          <h5>Made with 💚 at SDG</h5>
        </footer>
      </>
    )
  }
}

export default Streams
