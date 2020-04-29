import React from "react";
import CurrentWord from "./CurrentWord";
import LetterDisplay from "./LetterDisplay";
import ScoreDisplay from "./ScoreDisplay";
import HangmanDisplay from "./HangmanDisplay";
import NewWordForm from "./NewWordForm";
import {
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  withStyles,
  Badge,
} from "@material-ui/core";
import LetterInput from "./LetterInput";

import hangman0 from "/../../public";
import hangman1 from "/../../public";
import hangman2 from "/../../public";
import hangman3 from "/../../public";
import hangman4 from "/../../public";
import hangman5 from "/../../public";

const gameControlStyle = {
  border: "2px solid blue",
};

const currentWordStyle = {
  border: "2px solid red",
};

class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "APPLE",
      guesses: ["P"],
      incorrectGuessCount: 0,
      hangmanPictures: [
        hangman0.png,
        hangman1.png,
        hangman2.png,
        hangman3.png,
        hangman4.png,
        hangman5.png,
      ],
    };
  }

  // corresponding picture display would be hangmanPictures[incorrectGuessCount]

  render() {
    return (
      <>
        <Grid style={gameControlStyle} container>
          <Grid item xs={12}>
            <p>GameControl</p>
          </Grid>
          <Grid item xs={6}>
            <LetterInput />
            <Container style={currentWordStyle}>
              <CurrentWord
                word={this.state.word}
                guesses={this.state.guesses}
              />
            </Container>
          </Grid>
          <Grid xs={6}>
            <NewWordForm />
            <ScoreDisplay />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default GameControl;
