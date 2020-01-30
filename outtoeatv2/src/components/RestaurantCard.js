import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'

class RestaurantCard extends Component{
  render(){
    return (
      <div className='mainDisplay'>
        <div className='displayedCard'>
          <img src='/logo192.png'/>
          <h3>Restaurant One</h3>
          <span>Added in 2020</span>
          <p>This is where you will be eating, deal with it.</p>
        </div>
        <Button color='black' icon='shuffle'>
          <Button.Content visible></Button.Content>
          <Button.Content hidden>
            <Icon name='shuffle' />
          </Button.Content>
        </Button>
      </div>
    )
  }
}

export default RestaurantCard
