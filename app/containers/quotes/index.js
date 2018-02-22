
import React from 'react';
import { connect } from 'react-redux'
import Quotes from './quotes'
import {fetchQuote, fetchSecretQuote} from './actions'
import { getQuoteState } from './selectors'


const mapStateToProps = (state) => {
    return {
      quote: getQuoteState(state)
    }
  }
 
const mapDispatchToProps = {
  fetchQuote, fetchSecretQuote
};
  

export default connect(mapStateToProps, mapDispatchToProps)(Quotes)