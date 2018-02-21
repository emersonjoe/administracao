import { combineReducers } from 'redux'
import {todos ,
  visibilityFilter 
  } from './containers/home/reducer'


  import {  auth } from './containers/login/reducer'

import { createStore } from 'redux'

export default combineReducers({
  todos,
  auth,
  visibilityFilter
})
