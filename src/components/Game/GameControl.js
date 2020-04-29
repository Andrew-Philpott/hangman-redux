import React from "react";
import CurrentWord from "./CurrentWord";
import LetterDisplay from "./LetterDisplay";
import ScoreDisplay from "./ScoreDisplay";
import NewWordForm from "./NewWordForm";

class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: "apple",
    };
  }

  render() {
    return (
      <>
        <h1>GameControl</h1>
        <CurrentWord />
        <NewWordForm />
        <LetterDisplay />
        <ScoreDisplay />
      </>
    );
  }
}

export default GameControl;
