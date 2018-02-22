
import React from 'react';
import { connect } from 'react-redux'
import Home from './home'
import { getIsAuthenticated } from '../login/selectors'
import { fetchQuote, fetchSecretQuote } from '../quotes/actions'

const mapStateToProps = (state) => {
    return {
      isAuthenticated: getIsAuthenticated(state)
    }
  }
 
const mapDispatchToProps = {
  fetchQuote,
  fetchSecretQuote
};
  

export default connect(mapStateToProps, mapDispatchToProps)(Home)