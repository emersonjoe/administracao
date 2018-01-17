import { createSelector } from 'reselect'
// selector
const getBar = (state) => {

  return state.todos && state.todos.length && state.todos[0].text
}
// reselect function
export const getBarState = createSelector(
  [ getBar ],
  (bar) => bar
)