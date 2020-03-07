import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'

class RandomButton extends Component{
  render(){
    return (
        <Button color='black' icon='shuffle' onClick={this.props.getRestaurant}>
          <Button.Content visible></Button.Content>
          <Button.Content hidden>
            <Icon name='shuffle' />
          </Button.Content>
        </Button>
    )
  }
}

export default RandomButton
