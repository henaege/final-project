import React, { Component } from 'react'
import { Row, Input, Col, Button, Icon } from 'react-materialize'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import LoginAction from '../actions/LoginAction'

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            loginMessage: "",
            emailError: "",
            passwordError: "",
            passwordForm: <Input type="password" label="Password" s={12} />
        }
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(event){
        event.preventDefault()
        console.log('The user submitted the login form')
        var email = event.target[0].value
        var password = event.target[1].value
        var error = false

        if (password.length < 4){
            var passwordError = <h5 className="red-text">Password must be at least 4 characters</h5>
            var passwordForm = <Input type="password" label="Password" s={12}><Icon>block</Icon></Input>
            error = true
        } else {
            var passwordError = "null"
            var passwordForm = <Input type="password" label="Password" s={12} />
        }

        if(error){
            this.setState({
                passwordError: passwordError,
                passwordForm: passwordForm
            })
        } else {
            var passwordError = ""
            var passwordForm = <Input type="password" label="Password" s={12} />
            this.setState({
                passwordError: passwordError,
                passwordForm: passwordForm
            })
            this.props.loginAction({
                email: email,
                password: password
        })
    }
    }

    render(){
        console.log('Hello')
        return(
            <div>
                <form onSubmit={this.handleLogin}>
                <Row>
                    <Col offset='s3' s={6} className='center-align'>
                        <h2>Log In</h2>
                        {this.state.passwordError}
                    </Col>
                </Row>
                <Row>
                    <Col offset='s3' s={6}>
                        <Input type="email" label="Email" s={12} />
                    </Col>
                    <Col offset='s3' s={6}>
                        {this.state.passwordForm}
                    </Col>
                </Row>
                <Row>
                    <Col s={12} className='center-align'>
                        <Button type="submit" className="waves-effect green accent-2" flat>Submit<Icon right>send</Icon></Button>
                    </Col>
                </Row>
                </form>
            </div>
        )
    }
}

export default Login