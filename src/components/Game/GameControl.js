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
import { Container, Grid, Button } from "@material-ui/core";

const gameControlStyle = {
  border: "2px solid blue",
  borderRadius: 10,
  margin: 20,
};

const currentWordStyle = {
  border: "2px solid red",
  borderRadius: 10,
  margin: 20,
};

class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGameOver: false,
      formVisible: false,
    };
  }

  handleStartNewGame = () => {
    const { dispatch } = this.props;
    this.handleNewWordFormSubmission("");
    this.setState({ isGameOver: false, formVisible: false });
  };

  handleNewWordFormSubmission = (word) => {
    const { dispatch } = this.props;
    const action = a.newWord(word);
    const action2 = a.clearGuesses();
    dispatch(action);
    dispatch(action2);
    this.setState({ formVisible: true });
  };

  handleGuessFormSubmission = (char) => {
    if (!this.props.guesses.includes(char)) {
      const { dispatch } = this.props;
      const action = a.updateGuesses(char);
      dispatch(action);

      if (this.checkWin()) {
        console.log("Game was won");
        //check for win
        this.setState({ isGameOver: true, formVisible: false });
      } else if (this.checkLoss()) {
        //check for loss
        this.setState({ isGameOver: true, formVisible: false });
      }
    }
  };

  checkLoss = () => {
    if (this.props.guesses.length > 6) {
      return true;
    } else {
      return false;
    }
  };

  checkWin = () => {
    const wordArray = this.props.word.split("");
    for (let i = 0; i < wordArray.length; i++) {
      if (!this.props.guesses.includes(wordArray[i])) {
        return false;
      }
    }
    return true;
  };

  render() {
    if (this.state.isGameOver) {
      return (
        <>
          <h1>GAME OVER</h1>
          <Button onClick={this.handleStartNewGame}>Start Over</Button>
        </>
      );
    } else if (!this.state.formVisible) {
      return (
        <NewWordForm
          onSubmitNewWordForm={this.handleNewWordFormSubmission}
        ></NewWordForm>
      );
    } else {
      return (
        <>
          <Grid style={gameControlStyle} container>
            {/* <Grid item xs={12}></Grid>
            <Grid item xs={6}> */}
            <Container>
              <GuessForm onSubmitLetterGuess={this.handleGuessFormSubmission} />
            </Container>
            <Container style={currentWordStyle}>
              <CurrentRound
                word={this.props.word}
                guesses={this.props.guesses}
                incorrectGuessCount={this.state.incorrectGuessCount}
              />
            </Container>
            {/* </Grid> */}
            {/* <Grid xs={6}>
              <ScoreDisplay />
            </Grid> */}
          </Grid>
        </>
      );
    }
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
