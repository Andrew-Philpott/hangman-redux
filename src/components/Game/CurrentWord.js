import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    border: "2 solid blue",
  },
});

export default function CurrentWord(props) {
  const classes = useStyles();
  return (
    <Grid>
      <div>
        <h1>CurrentWordDisplay</h1>
        {/* {/hangmanDisplay} */}
        {/* {/letterDisplay} */}
      </div>
    </Grid>
  );
}
