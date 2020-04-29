import React from "react";
import PropTypes from "prop-types";

export default function GuessForm(props) {
  function handleSubmitGuess(event) {
    //event.preventDefault(); // do we actually want to reload the page here? and clear the form?
    props.onSubmitLetterGuess(event.target.guess.value);
  }

  return (
    <div>
      <h1>Handles the Users Guess</h1>
      <form onSubmit={handleSubmitGuess}>
        <label htmlFor="guess">Enter a letter</label>
        <input type="text" maxLength="1" size="1" name="guess" required />
        <button type="submit">Guess</button>
      </form>
    </div>
  );
}

GuessForm.propTypes = {
  onSubmitLetterGuess: PropTypes.func,
};
