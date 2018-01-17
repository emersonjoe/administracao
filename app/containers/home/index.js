
import React from 'react';
import { connect } from 'react-redux'
import Home from './home'
import {addTodo} from './actions'
import { getBarState } from './selectors'

console.log('Home', Home)
const mapStateToProps = (state) => {
    return {
      bar: getBarState(state)
    }
  }
 
const mapDispatchToProps = {
    addTodo
};
  

export default connect(mapStateToProps, mapDispatchToProps)(Home)