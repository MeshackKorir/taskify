import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav>
            <ul className='headers'>
              <li>
              <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/Login">Login</Link>
              </li>

              <li>
                <Link to="/Signup">Signup</Link>
              </li>

              <li>
                <Link to="/About">About</Link>
              </li>

              <li>
                <Link to="/Logout">Login</Link>
              </li>
              
            </ul>

            
        </nav>
    </div>
  )
}

export default Navbar;