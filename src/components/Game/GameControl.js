import React from "react";
import CurrentWord from "./CurrentWord";
import LetterDisplay from "./LetterDisplay";
import ScoreDisplay from "./ScoreDisplay";
import HangmanDisplay from "./HangmanDisplay";
import NewWordForm from "./NewWordForm";
import GuessForm from "./GuessForm";
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
      isGameOver: false,
    };
  }

  // corresponding picture display would be hangmanPictures[incorrectGuessCount]

  handleGuessFormSubmission = (char) => {
    if (this.state.guesses.includes(char.toUpperCase())) {
      // this letter has already been guessed
    } else {
      const newGuesses = this.state.guesses.concat(char.toUpperCase());
      this.setState(newGuesses);
    }
  };

  render() {
    return (
      <>
        <Grid style={gameControlStyle} container>
          <Grid item xs={12}>
            <p>GameControl</p>
          </Grid>
          <Grid item xs={6}>
            <GuessForm onSubmitLetterGuess={this.handleGuessFormSubmission} />
            <Container style={currentWordStyle}>
              <CurrentWord
                word={this.state.word}
                guesses={this.state.guesses}
                incorrectGuessCount={this.state.incorrectGuessCount}
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
