import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    border: "2 solid blue",
  },
});

export default function NewWordForm(props) {
  const classes = useStyles();
  return (
    <Grid>
      <div>
        <h1>Input your word for the other player to guess!</h1>
      </div>
    </Grid>
  );
}
