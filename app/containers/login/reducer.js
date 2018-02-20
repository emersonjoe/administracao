import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
  } from './constants'
  
  import { combineReducers } from 'redux'
  //import { handleActions } from 'redux-actions';

const { SHOW_ALL } = VisibilityFilters

export function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
    {
        console.log('reducer ADD_TODO', ADD_TODO)
        console.log('action', action)
        return [
            ...state,
            {
              text: action.text,
              completed: false
            }
          ]
    }

    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
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