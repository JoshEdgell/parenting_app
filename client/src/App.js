import React, { Component } from 'react';
import Login from './components/Login';
import './App.css';
import API from './utils/API'

class App extends Component {
  state = {
    loginStates: {
      userFound: true,
      passwordValid: true
    }
  }

  login = (username, password) => {
    console.log("logging in")
    API.login({
      username: username,
      password: password
    })
    .then(response => {
        console.log(response, "response from successful login")
    })
    .catch(error => {
        console.log(error, "login error");
    })
  }

  render() {
    return(
      <div className="App">
        <Login 
          userFound = { this.state.loginStates.userFound }
          passwordValid = { this.state.loginStates.passwordValid }
          login = { this.login }
        />
      </div>
    )
  }
};

export default App;
