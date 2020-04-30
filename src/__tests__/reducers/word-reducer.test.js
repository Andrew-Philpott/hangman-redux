import wordReducer from "../../reducers/word-reducer";

describe("wordReducer", () => {
  it("should return default state is there is no action type passed into the reducer", () => {
    expect(wordReducer("", { type: null })).toEqual("");
  });
});
