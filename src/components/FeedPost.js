import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  Avatar,
  Paper,
  IconButton,
  CardMedia,
  Button,
  Divider,
  InputBase,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";

import { Link } from "react-router-dom";

import UserCard from "../shared/UserCard";
import FeedPostActions from "./FeedPostActions";
import { useLinkStyles } from "../theme";
import OptionsDialog from "../shared/OptionsDialog";

const useFeedPostStyles = makeStyles((theme) => ({
  feedPostContainer: {
    width: "100%",
    backgroundColor: "#fafafa",
  },
  card: {
    minWidth: "60em",
    position: "relative",
    left: "5em",
    maxWidth: "60em",
  },
  cardHeader: {
    padding: "0.5em",
    fontWeight: "bold",
  },
  cardMedia: {
    width: "100%",
    height: "48em",
  },
  expanded: {
    display: "flex",
    width: "100%",
    // marginLeft: "1.4em",
  },
  collapsed: {
    display: "flex",
    // alignItems: "center",
    width: "100%",
    // marginLeft: "1.4em",
    // backgroundColor: "green",
  },
  caption: {
    fontSize: "1.4em",
  },
  captionWrapper: {
    display: "flex",
    alignItems: "flex-start",
    wordBreak: "break-all",
    overflow: "hidden",
  },
  username: {
    fontWeight: 600,
    marginRight: "0.6em",
    textDecoration: "none",
    marginLeft: "1em",

    "&:visited": {
      color: "transparent",
    },
  },
  moreButton: {
    color: "#999",
    padding: "0px",
    "&:hover": {
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
  allComments: {
    fontSize: "1.6em",
  },
  commentsContainer: {
    marginLeft: "1em",
  },
  commentAuthor: {
    fontSize: "600",
    color: "black",
  },
  datePosted: {
    margin: "1em",
    fontSize: "1em",
    color: "#8e8e8e",
  },
  addCommentContainer: {
    height: "5.6em",
    width: "100%",
    // width: "21.5em",
    // backgroundColor: "#fafafa",
    // border: "1px solid #dbdbdb",
  },
  addComment: {
    fontSize: "1.4em",
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

function FeedPost(props) {
  const classes = useFeedPostStyles();
  const linkStyles = useLinkStyles();
  const [showCaption, setShowCaption] = React.useState(false);
  const [showOptionsDialog, setOptionsDialog] = React.useState(false);
  return (
    <>
      <Grid
        justify="center"
        className={classes.feedPostContainer}
        container
        item
      >
        <Paper elevation={0} className={classes.card}>
          <UserCard
            feed={props.feed}
            openDialog={() => setOptionsDialog(true)}
          />
          <CardMedia
            className={classes.cardMedia}
            image={props.feed.media}
            title="Image"
          />
          <FeedPostActions />
          <Grid item>
            <Typography
              gutterBottom
              style={{ marginLeft: "1em" }}
              variant="subtitle2"
            >
              <span>
                {props.feed.likes === 1
                  ? "1 like"
                  : `${props.feed.likes} likes`}
              </span>
            </Typography>
          </Grid>
          <Grid
            item
            className={showCaption ? classes.expanded : classes.collapsed}
          >
            <Link
              // style={{ textDecoration: "none" }}
              to={`/${props.feed.user.username}`}
              className={classes.link}
            >
              <Typography variant="subtitle2" className={classes.username}>
                {props.feed.user.username}
              </Typography>
            </Link>
            {showCaption ? (
              <Typography
                variant="body2"
                component="span"
                dangerouslySetInnerHTML={{ __html: props.feed.caption }}
              />
            ) : (
              <div className={classes.captionWrapper}>
                <HTMLEllipsis
                  unsafeHTML={props.feed.caption}
                  className={classes.caption}
                  maxLine="0"
                  ellipsis="..."
                  basedOn="letters"
                />
                <Button
                  className={classes.moreButton}
                  onClick={() => setShowCaption(true)}
                >
                  more
                </Button>
              </div>
            )}
          </Grid>
          <Grid style={{ marginLeft: "1.4em" }} item>
            <Link className={classes.link} to={`/p/${props.feed.id}`}>
              <Typography variant="body2" className={classes.allComments}>
                View all {props.feed.comments.length} comments
              </Typography>
            </Link>
          </Grid>
          {props.feed.comments.map((comment) => (
            <div key={comment.id} className={classes.commentsContainer}>
              <Link to={`/${comment.user.id}`} className={classes.link}>
                <Typography
                  variant="subtitle2"
                  component="span"
                  className={classes.commentAuthor}
                >
                  {comment.user.username}
                </Typography>{" "}
                <Typography variant="body2" component="span">
                  {comment.user.content}
                </Typography>
              </Link>
            </div>
          ))}
          <Typography
            className={classes.datePosted}
            variant="body2"
            color="secondary"
          >
            5 days ago
          </Typography>
          <Divider />
          <Grid
            alignItems="center"
            direction="row"
            container
            className={classes.addCommentContainer}
          >
            <InputBase
              placeholder="Add a Comment"
              className={classes.addComment}
            />
            <Button className={classes.commentPostButton}>Post</Button>
          </Grid>
        </Paper>
      </Grid>
      {showOptionsDialog && (
        <OptionsDialog
          postId={props.feed.id}
          onClose={() => setOptionsDialog(false)}
        />
      )}
    </>
  );
}

export default FeedPost;
