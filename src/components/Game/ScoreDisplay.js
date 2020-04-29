import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
const useStyles = makeStyles({
  navbar: {
    backgroundColor: "purple",
  },
});

export default function ScoreDisplay(props) {
  return (
    <Grid container>
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
