
import React from 'react';
import { connect } from 'react-redux'
import Quotes from './quotes'
import {fetchQuote, fetchSecretQuote} from './actions'
import { getBarState } from './selectors'


const mapStateToProps = (state) => {
    return {
      bar: getBarState(state)
    }
  }
 
const mapDispatchToProps = {
  fetchQuote, fetchSecretQuote
};
  

export default connect(mapStateToProps, mapDispatchToProps)(Quotes)