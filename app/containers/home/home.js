import React from 'react';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux'

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
        console.log('props', this.props)
        const titulo = this.props.bar ? this.props.bar.toString() : 'vazio'
        console.log('titulo', titulo)
        //this.props.bar ? this.props.bar :
        return (
            <AppBar
            title={titulo}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        )
    }
}

export default Home