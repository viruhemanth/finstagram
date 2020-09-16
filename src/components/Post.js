import React from "react";
import {
  Avatar,
  Button,
  Divider,
  Grid,
  InputBase,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import UserCard from "../shared/UserCard";
import { defaultPost, defaultUser } from "../data";
import FeedPostActions from "./FeedPostActions";

const usePostStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "935px",
    height: "600px",
    display: "flex",
    flexWrap: "nowrap",
    fontSize: "10px",
  },
  PostImageContainer: {
    width: "600px",
    height: "600px",
    backgroundColor: "blanchedalmond",
  },
  PostImage: {
    width: "100%",
    height: "100%",
  },
  PostDetails: {
    flexGrow: 100,
  },
  postHead: {
    padding: 10,
  },
  postBody: {
    maxHeight: "38em",
    overflow: "scroll",
    margin: 0,
    padding: "1em",
    "&::-webkit-scrollbar": {
      width: "0px",
      background: "transparent",
    },
  },
  link: {
    textDecoration: "none",
    "&:visited": {
      color: "transparent",
    },
    color: "#999",
  },
  addCommentContainer: {
    height: "56px",
    width: "100%",
    position: "relative",
  },
  addComment: {
    // fontSize: "1.4em",
    marginLeft: "2em",
  },
  commentPostButton: {
    color: theme.palette.primary.main,
    padding: "0px",
    "&:hover": {
      background: "transparent",
    },
    position: "absolute",
    right: "0",
  },
}));

function Post() {
  const classes = usePostStyles();
  return (
    <Grid container direction="row" className={classes.PostImage}>
      <Divider />
      <Grid className={classes.PostImageContainer} item>
        <img
          src="https://images.unsplash.com/photo-1566052907859-652cb43a9fee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=674&q=80"
          style={{ height: "100%", width: "100%" }}
        />
      </Grid>
      <Grid item className={classes.PostDetails}>
        <Grid container direction="column">
          <Grid item className={classes.postHead}>
            <UserCard postHead feed={defaultPost} />
          </Grid>
          <Divider />
          <Grid item className={classes.postHead} style={{ maxWidth: "325px" }}>
            <PostBody />
          </Grid>
          <Divider />
          <Grid item style={{ width: "100%" }}>
            <FeedPostActions />
          </Grid>
          <Grid item>
            <Typography
              gutterBottom
              style={{ marginLeft: "1em" }}
              variant="subtitle2"
            >
              <span>
                {defaultPost.likes === 1
                  ? "1 like"
                  : `${defaultPost.likes} likes`}
              </span>
            </Typography>
          </Grid>
          <Divider />
          <Grid item>
            <Grid
              container
              direction="row"
              alignItems="center"
              className={classes.addCommentContainer}
            >
              <InputBase
                placeholder="Add a Comment"
                className={classes.addComment}
              />
              <Button className={classes.commentPostButton}>Post</Button>
            </Grid>
          </Grid>
          <Divider />
        </Grid>
      </Grid>
    </Grid>
  );
}

function PostBody() {
  const classes = usePostStyles();
  return (
    <Grid
      wrap="nowrap"
      container
      direction="row"
      spacing={1}
      className={classes.postBody}
    >
      <Grid item>
        <Avatar style={{ marginLeft: "-0.5em" }}>
          <img src={defaultPost.user.profile_image} alt="user" />
        </Avatar>
      </Grid>
      <Grid item>
        <Link
          style={{ fontSize: "1.4em", fontWeight: 600 }}
          className={classes.link}
          to={`/${defaultPost.user.username}`}
        >
          {defaultPost.user.username}
        </Link>
        <Typography
          dangerouslySetInnerHTML={{ __html: defaultPost.caption }}
          variant="body2"
          component="span"
        />
      </Grid>
    </Grid>
  );
}

export default Post;
