import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { defaultPost, getDefaultPost } from "../data";
import FeedPost from "../components/FeedPost";
import Sidebar from "../components/Sidebar";

const useFeedStyles = makeStyles((theme) => ({
  feedContainer: {
    // backgroundColor: "red",
    backgroundColor: "transparent",
    fontSize: "10px",
    marginTop: "8em",
    width: "100%",
  },
  mainFeed: {
    // backgroundColor: "green",
    height: "101em",
  },
  sideBar: {
    height: "58.8em",
    width: "35%",
    position: "relative",
    right: "5em",
  },
}));

function Feed() {
  const classes = useFeedStyles();
  return (
    <Grid
      component="article"
      className={classes.feedContainer}
      container
      direction="row"
      wrap="nowrap"
    >
      <Grid direction="column" className={classes.mainFeed} item container>
        {/* {Array.from({ length: 5 }, () => getDefaultPost()).map( */}
        {/*  (feedpost, key) => ( */}
        <FeedPost feed={defaultPost} />
        {/*  ) */}
        {/* )} */}
      </Grid>
      <Grid className={classes.sideBar} item>
        <Sidebar feed={defaultPost} />
      </Grid>
    </Grid>
  );
}

export default Feed;
