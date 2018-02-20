
import React from 'react';
import { connect } from 'react-redux'
import Login from './Login'
import {addTodo} from './actions'
import { getBarState } from './selectors'

const mapStateToProps = (state) => {
    return {
      bar: getBarState(state)
    }
  }
 
const mapDispatchToProps = {
    addTodo
};
  

export default connect(mapStateToProps, mapDispatchToProps)(Login)