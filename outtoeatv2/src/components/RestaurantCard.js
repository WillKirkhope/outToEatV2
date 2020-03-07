import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'

class RestaurantCard extends Component{


  render(){
    return (
      <div className='mainDisplay'>
        <div className='displayedCard'>
          <img className='cardImage' src={this.props.restaurant.image} alt={Math.random()} />
          <h2>{this.props.restaurant.name}</h2>
          <h4>{this.props.restaurant.info}</h4>
        </div>
      </div>
    )
  }
}

export default RestaurantCard
