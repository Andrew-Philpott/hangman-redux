import guessReducer from "./guess-reducer";
import wordReducer from "./word-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  guesses: guessReducer,
  word: wordReducer,
});

export default rootReducer;
