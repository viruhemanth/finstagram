import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { CommentIcon, LikeActiveIcon } from "../icons";

const useExploreGridItemStyles = makeStyles((theme) => ({
  main: {
    height: "30em",
    width: "30em",
    marginLeft: "2em",
    marginBottom: "2em",
    position: "relative",
  },
  gridPostOverlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    "&:hover": {
      background: "rgba(0,0,0,0.6)",
      cursor: "pointer",
      "& > div": {
        opacity: 1,
      },
    },
  },
  postInfoContainer: {
    height: "3em",
    width: "10em",
    position: "absolute",
    top: "45%",
    left: "35%",
    margin: "auto",
    opacity: 0,
  },
  postInfo: {
    color: "white",
    width: "50%",
    zIndex: 1000,
  },
  image: {
    height: "100%",
    width: "100%",
    userSelect: "none",
  },
}));

function ExploreGridItem() {
  const classes = useExploreGridItemStyles();
  return (
    <Grid container item direction="row" className={classes.main}>
      <Grid className={classes.gridPostOverlay}>
        <Grid
          container
          item
          direction="row"
          className={classes.postInfoContainer}
          component="div"
        >
          <Grid
            container
            item
            direction="row"
            className={classes.postInfo}
            justify="space-around"
            alignItems="center"
          >
            <Grid item>
              <LikeActiveIcon size={12} fill="white" />
            </Grid>
            <Grid item>
              <Typography>2</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            className={classes.postInfo}
            justify="space-around"
            alignItems="center"
          >
            <Grid item>
              <CommentIcon size={12} fill="white" />
            </Grid>
            <Grid item>
              <Typography>2</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img
        className={classes.image}
        src="https://www.ainonline.com/sites/ainonline.com/files/uploads/2015/08/8-2015-1_t_f_break_.jpg"
      />
    </Grid>
  );
}

export default ExploreGridItem;
