import React, { Component } from 'react';
import PotionForm from './PotionForm';
import AllPotionts from './AllPotionts';

import Logo from './images/logo.png'

class App extends Component {
  
  render() { 
    return (
      <div className="App">
        <div className="navbar">
            <img src={Logo} className="center"/>
        </div>
        <PotionForm/>
        <AllPotionts/>
      </div>
    );
  }
}
 
export default App;