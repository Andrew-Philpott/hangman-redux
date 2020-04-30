import React from "react";
import { Button, Input, Grid } from "@material-ui/core";
import PropTypes from "prop-types";

export default function GuessForm(props) {
  function handleSubmitGuess(event) {
    event.preventDefault(); // do we actually want to reload the page here? and clear the form?
    props.onSubmitLetterGuess(event.target.guess.value.toUpperCase());
    event.target.guess.value = "";
  }

  return (
    <div>
      <form onSubmit={handleSubmitGuess}>
        {/* <label htmlFor="guess">Enter a letter </label> */}
        <Input type="text" maxLength="1" size="1" name="guess" required />
        <Button type="submit">Guess Letter</Button>
      </form>
    </div>
  );
}

GuessForm.propTypes = {
  onSubmitLetterGuess: PropTypes.func,
};
