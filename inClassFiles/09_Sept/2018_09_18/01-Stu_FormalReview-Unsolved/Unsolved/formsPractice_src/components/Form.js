import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
   alert(`username: ${this.state.username} \n password ${this.state.password}`)

    console.log(this.state.username)

  }

  render() {
    return (


        <form>
          <p>Username: {this.state.username}</p>
          <p>Password: {this.state.password}</p>
          <input
            type="text"
            placeholder="Username"
            onChange={this.state.handleInputChange}
            value={this.state.username}
            
          />
          <input
            type="password"
            placeholder="Password"
            onChange={this.state.handleInputChange}
            value={this.state.password}
          
          />
          <button onClick={this.handleSubmit} >Submit</button>
        </form>

    );
  }
}

export default Form;
