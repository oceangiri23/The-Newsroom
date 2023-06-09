import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {Link} from "react-router-dom";
export class Navbar extends Component {


  render() {
    return (
      <div >
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary  p-3 mb-2 " >
  <div className="container-fluid "><Link className="navbar-brand  " to="#">The Newsroom</Link>
    
      <div className="collapse navbar-collapse  ml-5" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item h5"> <Link className="nav-link active" aria-current="page" to="/general">Home</Link></li>
        <li className="nav-item h5"><Link className="nav-link" to="/business">Business</Link></li>
        <li className="nav-item h5"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
        <li className="nav-item h5"><Link className="nav-link" to="/general">General</Link></li>
        <li className="nav-item h5"><Link className="nav-link" to="/health">Health</Link></li>
        <li className="nav-item h5"><Link className="nav-link" to="/science">Science</Link></li>
        <li className="nav-item h5"><Link className="nav-link" to="/sports">Sports</Link></li>
        <li className="nav-item h5"><Link className="nav-link" to="/technology">Technology</Link></li>
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar