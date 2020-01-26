import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

class RestaurantCard extends Component{
  render(){
    return (
      <div className='displayedCard'>
        <Card fluid color='black'>
          <Image className="ui centered large image" src='/logo192.png' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Restaurant One</Card.Header>
            <Card.Meta>
              <span className='date'>Added in 2020</span>
            </Card.Meta>
            <Card.Description>
              This is where you will be eating deal with it.
            </Card.Description>
          </Card.Content>
        </Card>
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
