
import React from 'react';
import { connect } from 'react-redux'
import Login from './Login'
import {loginUser} from './actions'
import { getBarState } from './selectors'

const mapStateToProps = (state) => {

  }
 
const mapDispatchToProps = {
  loginUser
};
  

export default connect(mapStateToProps, mapDispatchToProps)(Login)