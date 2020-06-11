import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import API from '../../utils/API'

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleInputChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.login({
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            console.log("login successful")
        })
        .catch(error => {
            console.log(error, "login error");
        })
    }

    render() {
        return(
            <Form id='loginForm'>
                <FormGroup>
                    <Label for='usermane'>Username</Label>
                    <Input 
                        value={this.state.username} 
                        onChange={this.handleInputChange}
                        name='username'
                        type='text'
                        id='username' 
                        placeholder='Enter username' 
                    />
                    <FormText color='danger'>User not found</FormText>
                </FormGroup>
                <FormGroup>
                    <Label for='password'>Password</Label>
                    <Input 
                        value={this.state.password} 
                        onChange={this.handleInputChange}
                        name='password'
                        type='password' 
                        id='password' 
                        placeholder='Enter password' 
                    />
                    <FormText color='danger'>Incorrect password</FormText>
                </FormGroup>
                <Button id='loginButton' onClick={this.handleFormSubmit}>Login</Button>
            </Form>
        )
    }
}

export default Login;