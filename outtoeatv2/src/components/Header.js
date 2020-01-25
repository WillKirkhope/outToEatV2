import React, { Component } from 'react';
import Nav from './Nav'

class Header extends Component {
  render(){
    return (
      <header className="App-header">
        <Nav right  />
      </header>
    )
  }
}

export default Header
