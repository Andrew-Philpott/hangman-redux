import React from "react";
import PropTypes from "prop-types";
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
      if (props.guesses.includes(char)) {
        return char;
      } else {
        return "_";
      }
    });
    return wordChars.join("");
  }

  return (
    <Grid>
      <div>
        <p>CurrentWordDisplay</p>
        <HangmanDisplay badGuessCount={props.incorrectGuessCount} />
        <LetterDisplay wordAppearsAs={generateWordFillIn()} />
      </div>
    </Grid>
  );
}

CurrentWord.propTypes = {
  word: PropTypes.string,
  guesses: PropTypes.array,
};
