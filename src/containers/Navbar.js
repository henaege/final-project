import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import { Navbar, NavItem, Dropdown, Button} from 'react-materialize'

class NavBar extends Component{

    

    render(){
        return(
                <Navbar brand='ToDo' right fixed>
                    <Dropdown trigger={<Button floating large flat className='transparent' waves='light' icon='menu' />}>
                        	<Link to='/tasks'><NavItem>ToDos</NavItem></Link>
	                        <Link to='/habits'><NavItem>Habits</NavItem></Link>
                            <Link to='/login'><NavItem>Login</NavItem></Link>
                            <Link to='/register'><NavItem>Register</NavItem></Link>
                    </Dropdown>
                </Navbar>
        )
    }
}
export default NavBar