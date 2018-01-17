import { combineReducers } from 'redux'
import {todos ,
  visibilityFilter 
  } from './containers/home/reducer'
import { createStore } from 'redux'
export default combineReducers({
  todos,
  visibilityFilter
})
