import React from 'react';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux'


//import { loginUser, fetchQuote, fetchSecretQuote } from '../actions'
import Login from '../login'
import Navbar from '../navbar'
import Quotes from '../quotes'

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class Home extends React.Component {
    componentDidMount()
    {
    }

    render() {
        const { dispatch, quote, isAuthenticated, errorMessage, isSecretQuote } = this.props
        return (
        <div>
            <Navbar
            isAuthenticated={isAuthenticated}
            errorMessage={errorMessage}
            dispatch={dispatch}
            />
            <div className='container'>
            <Quotes
                onQuoteClick={() => dispatch(fetchQuote())}
                onSecretQuoteClick={() => dispatch(fetchSecretQuote())}
                isAuthenticated={isAuthenticated}
                quote={quote}
                isSecretQuote={isSecretQuote}
            />
            </div>
        </div>
        )

    }
}

export default Home