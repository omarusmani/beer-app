import React, { Component } from 'react'

export class Beer extends Component {
    constructor(props){
        super(props)
      this.state={
        ...props,
        clicked:false
      }
     this.handleClick=this.handleClick.bind(this)

    }

handleClick=(e)=> {
  // e.preventDefault()

    this.setState({clicked:!this.state.clicked})
    console.log(this.state)
}
// buttons=()=>{
//   if(this.state.clicked===true){
//     return "Liked"
//   }
//   else return "Click to Like"
// }
  render(){
    // console.log(this.props)
    return (
      <li className="beer">
        <h3 className="name">{this.props.name}</h3>
        <img
        className="image"
        src={this.props.image}
        alt={this.props.name}
        />
        <button onClick={e => this.handleClick(e)}>{this.state.clicked===true? "Like":"Dislike"}</button>
        </li>

 );
  
    }
}
export default Beer