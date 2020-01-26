import React, { Component } from 'react';
import Header from './Header'
import RestaurantCard from './RestaurantCard'
// import Store from './Store'

class Home extends Component {

state = {
  products: []
}

componentDidMount(){
  this.getProducts()
}

getProducts = () => {
  fetch('https://dormistore.herokuapp.com/products')
    .then(response => response.json())
    .then(productData => {
      this.setState({products: productData.product})
    })
}

  render() {
    return (
      <div className="Home">
      <Header />
      <div className='sub-home'>
        <div className="cardDisplay">
          <RestaurantCard />
        </div>
      </div>
      </div>
    );
  }
}

export default Home;
