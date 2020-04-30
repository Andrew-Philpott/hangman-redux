import guessReducer from "../../reducers/guess-reducer";
import * as c from "../../actions/ActionTypes";

describe("guessReducer", () => {
  test("should return default state if there is no action type passed into the reducer", () => {
    expect(guessReducer([], { type: null })).toEqual([]);
  });

  test("should return an array with one letter after one submission", () => {
    expect(
      guessReducer(["a"], { type: c.UPDATE_GUESSES, payload: "b" })
    ).toEqual(["a", "b"]);
  });

  test("should clear the guesses array after calling clear", () => {
    expect(guessReducer(["a", "b", "c"], { type: c.CLEAR_GUESSES })).toEqual(
      []
    );
  });
});
