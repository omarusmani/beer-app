import React, {Component} from 'react';
import Beers from "./beers";

import './App.css';
class App extends Component{

  render() {
    console.log("I rendered")
   return <div className="App">
    <Beers/>

   </div>
}
}

export default App;
