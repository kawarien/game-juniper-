import React, { Component } from 'react';
import {
  NavLink
} from "react-router-dom";


class Nav extends Component {

  render() {

    return (
      <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand"  to="/">Home</NavLink>
      </div>
    </nav>
  
    )
  }
}
export default Nav;