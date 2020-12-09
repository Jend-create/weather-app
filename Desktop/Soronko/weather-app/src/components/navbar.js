import React from 'react'
import {Link} from "react-router-dom"
import 'react-bootstrap'

function Navbar() {
    // const {isLoggedin, setLogin} = useState(false)
    return (

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"  aria-label="Toggle navigation" >
    <span className="navbar-toggler-icon"></span>
  </button>
  <Link className="nav-link" to="/">Home</Link>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      
    <li className="nav-item">
        <Link className="nav-link" to="/signup">Signup</Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      
     
    </ul>
  </div>
</nav>
    )
    }
export default Navbar
