
import React from 'react';
import { connect } from 'react-redux'
import LogOut from './logout'
import {logoutUser} from '../login/actions'
import { getBarState } from '../login/selectors'

const mapStateToProps = (state) => {

  }
 
const mapDispatchToProps = {
    logoutUser
};
  

export default connect(mapStateToProps, mapDispatchToProps)(LogOut)