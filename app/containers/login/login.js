import React from 'react';
import { connect } from 'react-redux'
import {
    TextField,
    FlatButton
} from 'material-ui';
import { browserHistory } from 'react-router';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class Login extends React.Component {
    componentDidMount()
    {
    }

    handleClick(event) {
        console.log('event', event)
        const username = this.refs.username
        const password = this.refs.password
        console.log('username', username.value)
        const creds = { username: username.value.trim(), password: password.value.trim() }
        //this.props.onLoginClick(creds)
        this.props.loginUser(creds)
      }
    
    


    render() {

        const { errorMessage } = this.props

        return (
            <div>


        <input type='text' ref='username' className="form-control" placeholder='Username'/>
        <input type='password' ref='password' className="form-control" placeholder='Password'/>

             <Button label="Entrar" 
                onClick={(event) => this.handleClick(event)}                 
            /> 
            {errorMessage &&
            <p >{errorMessage}</p>
            }
            
            </div>
            
        )
    }
}

// Login.propTypes = {
//     onLoginClick: PropTypes.func.isRequired,
//     errorMessage: PropTypes.string
//   }

export default Login