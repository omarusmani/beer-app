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
  e.preventDefault()
    const newState=this.state;
    console.log(newState)
    this.setState({clicked:!this.state.clicked})

}
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
        <button onClick={e => this.handleClick(e)}>{this.props.clicked === true ?`Like`:`Dont`}</button>
        </li>

 );
  
    }
}
export default Beer