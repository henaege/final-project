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
            passwordForm: <Input type="password" label="Password" s={12} />
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

  }

    render(){
        console.log('Hello')
        return(
            <div>
                <form onSubmit={this.handleLogin}>
                <Row>
                    <Col offset='s3' s={6} className='center-align'>
                        <h1>{this.state.registerMessage}</h1>
                        {this.state.registerError}
                    </Col>
                </Row>
                <Row>
                    
                    <Col offset='s3' s={6}>
                        <Input label="First Name" s={12} />
                    </Col>
                    <Col offset='s3' s={6}>
                        <Input type="email" label="Last Name" s={12} />
                    </Col>
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

export default Register