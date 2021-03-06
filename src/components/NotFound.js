import React from 'react';
import {NavLink} from 'react-router-dom'

const NotFound = (props) => {

  return (
    <li className="not-found">
      <h3>404 - Page not found</h3>
      <p>That URL is not valid on this page.</p>
      <NavLink to="/">Home</NavLink>
    </li>
  )
}

export default NotFound
