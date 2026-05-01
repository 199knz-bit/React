import React from 'react'
import {createSearchParams, Link} from "react-router-dom";

function NavigationMenu() {
  return (
    <>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li className="loginBtn"><Link to="/login">Login</Link></li>
    </ul>
    <hr />
    </>
  )
}

export default NavigationMenu
