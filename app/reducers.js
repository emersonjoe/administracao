import { combineReducers } from 'redux'
import {todos ,
  visibilityFilter 
  } from './components/reducer'
import { createStore } from 'redux'
export default combineReducers({
  todos,
  visibilityFilter
})
