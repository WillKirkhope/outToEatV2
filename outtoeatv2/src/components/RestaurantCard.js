import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

class RestaurantCard extends Component{
  render(){
    return (
      <div>
        <Card className="test">
          <Image src='/logo192.png' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Restaurant One</Card.Header>
            <Card.Meta>
              <span className='date'>Added in 2020</span>
            </Card.Meta>
            <Card.Description>
              This is where you will be eating deal with it.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              22 Reviews
            </a>
          </Card.Content>
        </Card>
        <Button color='black' animated>
          <Button.Content visible>Randomize!</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
        </Button>
      </div>
    )
  }
}

export default RestaurantCard
