import React from "react";
import { Grid, Container, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

export default function ScoreDisplay(props) {
  return (
    <Grid style={{ border: "2px solid green" }} container>
      <Grid xs={12}>
        <p>Score</p>
      </Grid>
      <Grid xs={6}>
        <p>Wins</p>
      </Grid>
      <Grid xs={6}>
        <p>Losses</p>
      </Grid>
    </Grid>
  );
}

ScoreDisplay.propTypes = {
  wins: PropTypes.number,
  losses: PropTypes.number,
};
