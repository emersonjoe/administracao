import React from 'react';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux'


//import { loginUser, fetchQuote, fetchSecretQuote } from '../actions'
import Login from '../login'
import Navbar from '../navbar'
import Quotes from '../quotes'


import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter,
    history 
  } from "react-router-dom";

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class Home extends React.Component {
    componentDidMount()
    {
        const { dispatch, quote, isAuthenticated, errorMessage, isSecretQuote, history } = this.props

        {!isAuthenticated &&

            history.push("/")
        }

        
    }


    render() {
        const { 
            dispatch, 
            quote, 
            isAuthenticated, 
            errorMessage, 
            isSecretQuote,
            fetchQuote,
            fetchSecretQuote
        } = this.props

        return (
        <div>
            {/* <Navbar
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
            </div> */}

            {!isAuthenticated &&

                'Não autenticado / Esta é a Home Page'
            }

            {isAuthenticated &&
              

              <div className='container'>
              Esta é a Home Page
              <Quotes
                  onQuoteClick={() => fetchQuote()}
                  onSecretQuoteClick={() => fetchSecretQuote()}
                  isAuthenticated={isAuthenticated}
                  
                  isSecretQuote={isSecretQuote}
              />
              </div>

            }            

            
        </div>
        )

    }
}

export default Home