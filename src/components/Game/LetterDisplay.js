import React from "react";
import PropTypes from "prop-types";

export default function LetterDisplay(props) {
  return (
    <div>
      <p>{props.wordAppearsAs}</p>
      <p>Incorrect guesses: {props.incorrectLetters}</p>
    </div>
  );
}

LetterDisplay.propTypes = {
  wordAppearsAs: PropTypes.string,
  incorrectLetters: PropTypes.string,
};
