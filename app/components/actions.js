import { createStore } from 'redux'
import {
    ADD_TODO ,
    TOGGLE_TODO ,
    SET_VISIBILITY_FILTER 
} from './constants'

export function addTodo(text) {
    console.log('text', text)
    console.log('ADD_TODO', ADD_TODO)
    return { type: ADD_TODO, text }
  }
  
  export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
  }
  
  export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
  }