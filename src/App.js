import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './containers/Navbar'
import Login from './containers/Login'
import Register from './containers/Register'
import './App.css'
import './materialize/css/materialize.css'


class App extends Component {
  render() {
    console.log(this.props)
    return (
      <Router>
        <div>
            <Navbar />
          <div className='container-fluid main'>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
