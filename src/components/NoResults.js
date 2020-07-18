import React from 'react';
import {NavLink} from 'react-router-dom'

const NoResults = (props) => {

  return (
    <li className="not-found">
      <h3>No Results Found</h3>
      <p>Your search did not return any results. Please try again.</p>
      <NavLink to="/">Home</NavLink>
    </li>
  )
}

export default NoResults
