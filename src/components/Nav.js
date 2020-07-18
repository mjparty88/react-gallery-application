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
          <li><NavLink to="/sunrise" onClick={this.handleSelect}>Sunrise</NavLink></li>
          <li><NavLink to="/butterfly" onClick={this.handleSelect}>Butterfly</NavLink></li>
          <li><NavLink to="/graffiti" onClick={this.handleSelect}>Graffiti</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default Nav
