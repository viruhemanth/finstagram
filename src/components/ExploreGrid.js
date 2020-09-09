import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ExploreGridItem from "./ExploreGridItem";

const useExploreGridStyles = makeStyles((theme) => ({
  container: {
    fontSize: "10px",
    marginTop: "10em",
    // height: "50em",
    width: "100%",
  },
  gridsContainer: {
    width: "80%",
  },
}));

function ExploreGrid() {
  const classes = useExploreGridStyles();
  return (
    <Grid justify="center" container className={classes.container} spacing={4}>
      <Grid item container className={classes.gridsContainer} justify="center">
        <ExploreGridItem />
        <ExploreGridItem />
        <ExploreGridItem />
        <ExploreGridItem />
        <ExploreGridItem />
        <ExploreGridItem />
        <ExploreGridItem />
        <ExploreGridItem />
        <ExploreGridItem />
        <ExploreGridItem />
        <ExploreGridItem />
        <ExploreGridItem />
      </Grid>
    </Grid>
  );
}

export default ExploreGrid;
