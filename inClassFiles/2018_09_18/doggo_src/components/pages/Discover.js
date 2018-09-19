import React, { Component } from "react";

import API from "../API";

class Discover extends Component {
  state = {
   counter: 0,
   result: {},
  };
  componentDidMount = () => {
    this.searchDogs()
    

  }

  handleInputChange = event =>{
    const value = event.target.value;
    const name = event.target.name;
  
    this.setState({
      [name]: value
    });
  };

  onclickdog = event =>{
   console.log("clicked")
   const value = event.target.value;
   if(value === "friend"){
    this.setState({ counter: this.state.counter + 1 })
   }
    this.searchDogs()

  }
  
  searchDogs = () => {
    API.search()
      .then(res => this.setState({ result: res.data.message[0] }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <p>Doggo friends {this.state.counter} </p>
        <img alt='dog' src={this.state.result}/>
        <button  value="friend" onClick={this.onclickdog}>Friend </button>
        <button  onClick={this.onclickdog}> Destroy</button>
      </div>
    );
  }
}

export default Discover;
