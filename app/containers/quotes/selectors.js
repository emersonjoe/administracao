import { createSelector } from 'reselect'
// selector
const getQuote = (state) => {
  return state.quotes && state.quotes.quote
}
// reselect function
export const getQuoteState = createSelector(
  [ getQuote ],
  (quote) => quote
)