import React, {Component} from 'react';
import {
  NavLink
} from  'react-router-dom';

class Nav extends Component {
  constructor({updateTag}) {
    super()
    this.updatePics = updateTag;
  }

  handleSelect = (e) => {
    this.updatePics(e.target.innerHTML.toLowerCase())
  }

  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/cats" onClick={this.handleSelect}>Cats</NavLink></li>
          <li><NavLink to="/dogs" onClick={this.handleSelect}>Dogs</NavLink></li>
          <li><NavLink to="/computers" onClick={this.handleSelect}>Computers</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default Nav
