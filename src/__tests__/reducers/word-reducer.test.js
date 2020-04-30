import wordReducer from "../../reducers/word-reducer";
import * as c from "../../actions/ActionTypes";

describe("wordReducer", () => {
  it("should return default state is there is no action type passed into the reducer", () => {
    expect(wordReducer("", { type: null })).toEqual("");
  });

  it("should successfully set word", () => {
    expect(
      wordReducer("test", {
        type: c.NEW_WORD,
        payload: "new",
      })
    ).toEqual("new");
  });
});
