
import React from 'react';
import { connect } from 'react-redux'
import Navbar from './navbar'

import { getIsAuthenticated } from '../login/selectors'

const mapStateToProps = (state) => {
    return {
        isAuthenticated: getIsAuthenticated(state)
    }
  }
 
const mapDispatchToProps = {

};
  

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)