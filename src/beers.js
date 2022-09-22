import React, { Component } from 'react'
import Beer from "./beer"

export default class Beers extends Component {

    constructor(){
        super();
        console.log("I am the constructor")
        this.state={
          beers:[],
        };}

    componentDidMount(){
    console.log("I  mounted")
    fetch("https://api.punkapi.com/v2/beers").then((resolve)=>resolve.json()).then((data)=> {this.setState({beers:data,});});
        }
    
    componentDidUpdate(){
    console.log("I updated")
    console.log("beers", this.state.beers)

     }

  render() {

    return (
        
    <ul className="beers">
      {this.state.beers.map(({id, name, image_url})=>
        <Beer name={name} image={image_url} key={id}/>
      )}
    </ul>
    )
  }
}
