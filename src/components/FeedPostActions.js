import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { LikeIcon, CommentIcon, ShareIcon, SaveIcon } from "../icons";

const useFeedPostActionStyles = makeStyles((theme) => ({
  container: {
    height: "4em",
    width: "100%",
  },
  iconStyle: {
    marginLeft: "1.5em",
    "&:last-child": {
      position: "absolute",
      right: "2em",
    },
  },
}));

function FeedPostActions() {
  const classes = useFeedPostActionStyles();

  return (
    <Grid
      container
      className={classes.container}
      direction="row"
      alignItems="center"
    >
      <LikeIcon className={classes.iconStyle} />
      <CommentIcon className={classes.iconStyle} />
      <ShareIcon className={classes.iconStyle} />
      <SaveIcon className={classes.iconStyle} />
    </Grid>
  );
}

export default FeedPostActions;
