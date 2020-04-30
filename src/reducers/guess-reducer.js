import * as c from "../actions/ActionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case c.UPDATE_GUESSES:
      const newGuesses = [...state, action.payload];
      return newGuesses;
    case c.CLEAR_GUESSES:
      return [];
    default:
      return state;
  }
};
