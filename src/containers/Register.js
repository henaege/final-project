import React, { Component } from 'react'
import { Row, Input, Col, Button, Icon } from 'react-materialize'
import {bindActionCreators} from 'redux'
import RegisterAction from '../actions/RegisterAction'
import {connect} from 'react-redux'

class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
            value:'',
            registerMessage: 'Create an Account:',
            registerError: '',
            passwordForm: <Input type="password" label="Password" s={12} />,
            passwordError: ""
        }
        this.handleRegistration = this.handleRegistration.bind(this)
    }

    getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    
  }

  handleRegistration(event){
      event.preventDefault()
      
      var firstName = event.target[0].value
      var lastName = event.target[1].value
      var email = event.target[2].value
      var password = event.target[3].value
      var confirmPassword = event.target[4].value
      var error = false

      if (password !== confirmPassword){
          var passwordError = <h5 className="red-text">Passwords do not match!</h5>
          error = true
      } else {
          console.log("register form submitted")
            this.setState({
                passwordError: passwordError
            })
            this.props.registerAction({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            })
        }
    }

    render(){
        console.log('Hello')
        return(
            <div>
                <form onSubmit={this.handleRegistration}>
                <Row>
                    <Col offset='s3' s={6} className='center-align'>
                        <h2>{this.state.registerMessage}</h2>
                        {this.state.registerError}
                    </Col>
                </Row>
                <Row>
                    
                    <Col offset='s3' s={6}>
                        <Input label="First Name" s={12} />
                    </Col>
                    <Col offset='s3' s={6}>
                        <Input label="Last Name" s={12} />
                    </Col>
                    <Col offset='s3' s={6}>
                        <Input type="email" label="Email" s={12} />
                    </Col>
                    <Col offset='s3' s={6}>
                        {this.state.passwordForm}
                    </Col>
                    <Col offset='s3' s={6}>
                        <Input type="password" label=" Confirm password" s={12} />
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

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        registerAction: RegisterAction
    }, dispatch)
}

function mapStateToProps(state){
    return {
        registerResponse: state.registerReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)