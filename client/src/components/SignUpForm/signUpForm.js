import React, { Component } from "react";
import API from '../../utils/API'


class signUpForm extends Component {
  // Setting the component's initial state
  state = {
    username: "",
    password: "",
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    //function to perform post route  to api/loginuser
    function signUpUser(email, password) {
      
      API.signUpPost({
        email: email,
        password: password,
      })
        .then(function () {
          window.location.replace("/login");
          // If there's an error, log the error
        })
        .catch(function (err) {
          console.log(err);
        });
    }

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    this.setState({
      username: "",
      password: "",
    });

    signUpUser(this.state.username, this.state.password);
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <form className="form">
          <input
            value={this.state.username}
            name="username"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Username"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default signUpForm;
