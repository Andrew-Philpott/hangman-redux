import * as a from "../../actions";
import * as c from "../../actions/ActionTypes";

describe("newWord", () => {
  it("should correctly create a newWord action", () => {
    expect(a.newWord("test")).toEqual({ type: c.NEW_WORD, payload: "TEST" });
  });
});

describe("clearGuesses", () => {
  it("should correctly create a clearGuesses action", () => {
    expect(a.clearGuesses()).toEqual({ type: c.CLEAR_GUESSES });
  });
});

describe("updateGuesses", () => {
  it("should correctly create a updateGuesses action", () => {
    expect(a.updateGuesses("C")).toEqual({
      type: c.UPDATE_GUESSES,
      payload: "C",
    });
  });
});
