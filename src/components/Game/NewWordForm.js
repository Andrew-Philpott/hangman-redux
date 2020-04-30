import React from "react";
import { Button, Input, Grid } from "@material-ui/core";
import PropTypes from "prop-types";

export default function NewWordForm(props) {
  const handleSubmitGuess = (event) => {
    event.preventDefault();
    props.onSubmitNewWordForm(event.target.word.value);
    event.target.word.value = "";
  };

  return (
    <Grid>
      <div style={{ border: "2 solid red" }}>
        <h1>Input your word for the other player to guess!</h1>
        <form onSubmit={handleSubmitGuess} method="get">
          <label htmlFor="word">Enter a word</label>
          <Input type="text" maxLength="20" name="word" required />
          <Button type="submit">Submit a new word </Button>
        </form>
      </div>
    </Grid>
  );
}

NewWordForm.propTypes = {
  onSubmitNewWordForm: PropTypes.func,
};
