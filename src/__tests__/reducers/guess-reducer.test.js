import guessReducer from "../../reducers/guess-reducer";

describe("guessReducer", () => {
  test("should return default state if there is no action type passed into the reducer", () => {
    expect(guessReducer({}, { type: null })).toEqual({});
  });
});
