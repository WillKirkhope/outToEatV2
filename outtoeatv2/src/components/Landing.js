import React, { Component } from 'react';

class Landing extends Component{
  render(){
    return (
      <div className='landingMain'>
        <div className='loginCard'>
          <img src='/logo192.png'/>
          <h3>Out To Eat</h3>
          <span>Established in 2020</span>
          <p>Please Log In or Sign Up</p>
        </div>
      </div>
    )
  }
}

export default Landing
