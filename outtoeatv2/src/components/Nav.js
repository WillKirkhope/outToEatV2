import React from 'react'
import { stack as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu right={this.props.right}>
          <NavLink to='/'>Home</NavLink>
      </Menu>
    );
  }
}

export default Nav
