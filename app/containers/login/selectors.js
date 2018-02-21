import { createSelector } from 'reselect'
// selector
const isAuthenticated = (state) => {
  return state.auth && state.auth.isAuthenticated
}
// reselect function
export const getIsAuthenticated = createSelector(
  [ isAuthenticated ],
  (isAuthenticated) => isAuthenticated
)