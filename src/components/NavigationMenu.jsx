import React from 'react'
import {createSearchParams, Link} from "react-router-dom";
import { useAuthContext } from '../contexts/AuthContext';
import "../css/NavBar.css"


function NavigationMenu() {
  const {loggedIn, logout} = useAuthContext() 

  return (
    <>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/more">More</Link></li>
        <li className="loginBtn">
          {loggedIn ? (
            <button onClick= {logout}>Logout</button>
          ) : (
          <Link to="/login">Login</Link>
          )}
        </li>
    </ul>
    <hr />
    </>
  )
}

export default NavigationMenu
