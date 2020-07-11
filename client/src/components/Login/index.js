import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            username: '',
            password: ''
        }
    }

    componentDidMount = () => {
        console.log(this.props)
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
        this.props.login();
    }

    render() {

        let userPrompt = '';
        let passwordPrompt = '';

        if (!this.props.userFound) {
            userPrompt = "User Not Found"
        }

        if (!this.props.passwordValid) {
            passwordPrompt = "Incorrect Password"
        }

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
                    <FormText color='danger'> { userPrompt } </FormText>
                    {/* { userAlert } */}
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
                    <FormText color='danger'> { passwordPrompt } </FormText>
                    {/* { passwordAlert } */}
                </FormGroup>
                <Button id='loginButton' onClick={this.handleFormSubmit}>Login</Button>
            </Form>
        )
    }
}

export default Login;