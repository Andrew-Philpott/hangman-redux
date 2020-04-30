import * as a from "./ActionTypes";

export const newWord = (word) => ({
  type: a.NEW_WORD,
  payload: word.toUpperCase(),
});

export const clearWord = () => ({
  type: "CLEAR_WORD",
});

export const updateGuesses = (guess) => ({
  type: "UPDATE_GUESSES",
  payload: guess,
});

export const clearGuesses = () => ({
  type: "CLEAR_GUESSES",
});
