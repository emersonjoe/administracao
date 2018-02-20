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
class Home extends React.Component {
    componentDidMount()
    {
        console.log('addTodo', this.props.addTodo)

        var today = new Date();
        var day = today.getDay();
         this.props.addTodo(today)
    }
    render() {
        return (
            <div>
            <TextField
              hintText="Usuário"
            />
            <br />
            <TextField
              hintText="Senha"
              type="password"
            />
             <FlatButton label="Entrar" 
                onClick={
                    () => {
                        this.props.history.push('/home')
                    }
                }
            /> 
            </div>
            
        )
    }
}

export default Home