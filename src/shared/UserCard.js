/* eslint-disable no-nested-ternary */
import React from "react";
import {
  CardHeader,
  Avatar,
  IconButton,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MoreHoriz } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useFeedPostStyles = makeStyles((theme) => ({
  cardHeader: {
    padding: "0.5em",
    fontWeight: "bold",
    position: "relative",
  },
  button: {
    padding: "0px",
    marginRight: "-1em",
    color: theme.palette.primary.main,
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
}));

function UserCard(props) {
  const classes = useFeedPostStyles(props);
  return props.side ? (
    <CardHeader
      className={classes.cardHeader}
      avatar={
        <Avatar aria-label="recipe">
          <img src={props.feed.user.profile_image} alt="user" />
        </Avatar>
      }
      title={
        <Link className={classes.link} to={`/${props.feed.user.username}`}>
          {props.feed.user.name}
        </Link>
      }
      subheader="ramjikao_112"
    />
  ) : props.sideSuggestion ? (
    <CardHeader
      className={classes.cardHeader}
      avatar={
        <Avatar aria-label="recipe">
          <img src={props.feed.user.profile_image} alt="user" />
        </Avatar>
      }
      action={
        <IconButton
          style={{ backgroundColor: "transparent" }}
          aria-label="settings"
        >
          <Button className={classes.button}>Follow</Button>
        </IconButton>
      }
      title={
        <Link className={classes.link} to={`/${props.feed.user.username}`}>
          {props.feed.user.name}
        </Link>
      }
      subheader="Followed by Rnk and 2 more"
    />
  ) : props.postHead ? (
    <CardHeader
      className={classes.cardHeader}
      avatar={
        <Avatar aria-label="recipe">
          <img src={props.feed.user.profile_image} alt="user" />
        </Avatar>
      }
      action={
        <IconButton
          style={{ backgroundColor: "transparent" }}
          aria-label="settings"
        >
          <MoreHoriz onClick={props.openDialog} />
        </IconButton>
      }
      title={
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Link className={classes.link} to={`/${props.feed.user.username}`}>
            {props.feed.user.name}
          </Link>
          <Button className={[classes.button, classes.postButton]}>
            Follow
          </Button>
        </div>
      }
      subheader="ramjikao_112"
    />
  ) : props.postBody ? (
    <CardHeader
      className={classes.cardHeader}
      avatar={
        <Avatar
          aria-label="recipe"
          style={{ position: "absolute", top: "5px", left: "5px" }}
        >
          <img src={props.feed.user.profile_image} alt="user" />
        </Avatar>
      }
      title={
        <div className={classes.postBody}>
          <Link
            style={{ marginLeft: "2.5em" }}
            className={classes.link}
            to={`/${props.feed.user.username}`}
          >
            {props.feed.user.name}
            <Typography
              style={{ marginLeft: "1em", overflow: "scroll" }}
              variant="body2"
              component="span2"
              dangerouslySetInnerHTML={{ __html: props.feed.caption }}
            />
          </Link>
        </div>
      }
    />
  ) : (
    <CardHeader
      className={classes.cardHeader}
      avatar={
        <Avatar aria-label="recipe">
          <img src={props.feed.user.profile_image} alt="user" />
        </Avatar>
      }
      action={
        <IconButton
          style={{ backgroundColor: "transparent" }}
          aria-label="settings"
        >
          <MoreHoriz onClick={props.openDialog} />
        </IconButton>
      }
      title={
        <Link className={classes.link} to={`/${props.feed.user.username}`}>
          {props.feed.user.name}
        </Link>
      }
    />
  );
}

export default UserCard;
