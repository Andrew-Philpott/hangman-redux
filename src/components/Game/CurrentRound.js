import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import HangmanDisplay from "./HangmanDisplay";
import LetterDisplay from "./LetterDisplay";

const useStyles = makeStyles({
  navbar: {
    border: "2px solid blue",
  },
});

export default function CurrentWord(props) {
  const classes = useStyles();

  function generateWordFillIn() {
    const wordChars = props.word.split("").map((char) => {
      if (props.guesses.includes(char) || char === " " || char === "-") {
        return char + " ";
      } else {
        return "_ ";
      }
    });
    return wordChars.join("");
  }
  const incorrectLetters = () => {
    const letters = props.guesses.filter(
      (char) => !props.word.split("").includes(char)
    );
    return letters.join("");
  };
  return (
    <Grid>
      <div>
        <p>CurrentWordDisplay</p>
        <HangmanDisplay badGuessCount={incorrectLetters().length} />
        <LetterDisplay
          wordAppearsAs={generateWordFillIn()}
          incorrectLetters={incorrectLetters()}
        />
      </div>
    </Grid>
  );
}
