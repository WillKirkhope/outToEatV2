import React, { Component } from 'react';
import Header from './Header';
import RestaurantCard from './RestaurantCard';
import RandomButton from './RandomButton';
import data from '../restaurant.json';

class Home extends Component {

constructor(props) {
  super(props)
  this.state = {
    restaurant: []
  }
}

componentDidMount(){
  this.getRestaurant()
}

getRestaurant = () => {
  let random = Math.floor(Math.random()*{data}.data.length)
  let randomRestaurant = {data}.data[random]
  this.setState({restaurant: randomRestaurant})
}

  render() {
    return (
      <div className="Home">
      <Header />
      <div className='sub-home'>
        <div className="cardDisplay">
          <RestaurantCard restaurant={this.state.restaurant} />
          <RandomButton getRestaurant={this.getRestaurant}/>
        </div>
      </div>
      </div>
    );
  }
}

export default Home;
