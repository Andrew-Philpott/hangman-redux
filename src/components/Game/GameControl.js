import React from "react";
import CurrentRound from "./CurrentRound";
import LetterDisplay from "./LetterDisplay";
import ScoreDisplay from "./ScoreDisplay";
import HangmanDisplay from "./HangmanDisplay";
import NewWordForm from "./NewWordForm";
import * as a from "../../actions";
//import * as constants from "../../actions/ActionTypes";
import { connect } from "react-redux";
import GuessForm from "./GuessForm";
import { Container, Grid } from "@material-ui/core";

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
      guesses: ["P", "X", "T"],
      incorrectGuessCount: 1,
      isGameOver: false,
    };
  }

  handleNewWordFormSubmission = (word) => {
    const { dispatch } = this.props;
    const action = a.newWord(word);
    const action2 = a.clearGuesses();
    dispatch(action);
    dispatch(action2);
  };

  handleGuessFormSubmission = (char) => {
    if (!this.props.guesses.includes(char)) {
      const { dispatch } = this.props;
      const action = a.updateGuesses(char);
      dispatch(action);
    }
  };

  render() {
    return (
      <>
        <Grid style={gameControlStyle} container>
          <Grid item xs={12}>
            <NewWordForm
              onSubmitNewWordForm={this.handleNewWordFormSubmission}
            ></NewWordForm>
          </Grid>
          <Grid item xs={6}>
            <GuessForm onSubmitLetterGuess={this.handleGuessFormSubmission} />
            <Container style={currentWordStyle}>
              <CurrentRound
                word={this.props.word}
                guesses={this.props.guesses}
                incorrectGuessCount={this.state.incorrectGuessCount}
              />
            </Container>
          </Grid>
          <Grid xs={6}>
            <ScoreDisplay />
          </Grid>
        </Grid>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    word: state.word,
    guesses: state.guesses,
  };
};

GameControl = connect(mapStateToProps)(GameControl);

export default GameControl;
