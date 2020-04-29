import React from "react";
import PropTypes from "prop-types";

export default function LetterInput(props) {
  function handleSubmitGuess(event) {
    event.preventDefault(); // do we actually want to reload the page here? and clear the form?
    props.onSubmitLetterGuess(event.target.guess.value);
  }

  return (
    <div>
      <h1>Handles the Users LetterInput or "guess"</h1>
      <form onSubmit={handleSubmitGuess()}>
        <label htmlFor="guess">Type a guess</label>
        <input type="text" maxLength="1" name="guess" required />
      </form>
    </div>
  );
}

LetterInput.propTypes = {
  onSubmitLetterGuess: PropTypes.func,
};
