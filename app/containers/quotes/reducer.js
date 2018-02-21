import {
  QUOTE_REQUEST,
 QUOTE_SUCCESS,
  QUOTE_FAILURE
} from './constants'
  
  import { combineReducers } from 'redux'
  //import { handleActions } from 'redux-actions';



export function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export function quotes(state = {
  isFetching: false,
  quote: '',
  authenticated: false
}, action) {
switch (action.type) {
  case QUOTE_REQUEST:
    return Object.assign({}, state, {
      isFetching: true
    })
  case QUOTE_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      quote: action.response,
      authenticated: action.authenticated || false
    })
  case QUOTE_FAILURE:
    return Object.assign({}, state, {
      isFetching: false
    })
  default:
    return state
  }
}

// const todoApp = combineReducers({
//   visibilityFilter,
//   todos
// })

// export default todoApp