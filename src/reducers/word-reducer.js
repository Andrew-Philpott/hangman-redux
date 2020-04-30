import * as c from "../actions/ActionTypes";

export default (state = "", action) => {
  switch (action.type) {
    case c.NEW_WORD:
      return action.payload;
    default:
      return state;
  }
};
