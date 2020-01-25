import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom"
import Landing from './components/Landing'
import Home from "./components/Home"
import Nav from "./components/Nav"
// import Header from './components/Header'
// import './App.css';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' component={Landing} exact />
            <Route path='/home' component={Home} exact />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
