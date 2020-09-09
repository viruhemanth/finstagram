/* eslint-disable no-nested-ternary */
import React from "react";
import { CardHeader, Avatar, IconButton, Button, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MoreHoriz } from "@material-ui/icons";

const useFeedPostStyles = makeStyles((theme) => ({
  // card: {
  //   minWidth: (props) => (props.side ? "10em" : "60em"),
  //   position: "relative",
  //   left: "5em",
  //   backgroundColor: (props) => props.color,
  // },
  cardHeader: {
    padding: "0.5em",
    fontWeight: "bold",
  },
  button: {
    padding: "0px",
    marginRight: "-1em",
    color: theme.palette.primary.main,
    "&:hover": {
      background: "transparent",
    },
  },
}));

function UserCard(props) {
  const classes = useFeedPostStyles(props);
  return props.side ? (
    <CardHeader
      className={classes.cardHeader}
      avatar={(
        <Avatar aria-label="recipe">
          <img src={props.feed.user.profile_image} alt="user" />
        </Avatar>
      )}
      title="Mr Reese"
      subheader="ramjikao_112"
    />
  ) : props.sideSuggestion ? (
    <CardHeader
      className={classes.cardHeader}
      avatar={(
        <Avatar aria-label="recipe">
          <img src={props.feed.user.profile_image} alt="user" />
        </Avatar>
      )}
      action={(
        <IconButton
          style={{ backgroundColor: "transparent" }}
          aria-label="settings"
        >
          <Button className={classes.button}>Follow</Button>
        </IconButton>
      )}
      title="Mr Reese"
      subheader="Followed by Rnk and 2 more"
    />
  ) : (
    <CardHeader
      className={classes.cardHeader}
      avatar={(
        <Avatar aria-label="recipe">
          <img src={props.feed.user.profile_image} alt="user" />
        </Avatar>
      )}
      action={(
        <IconButton
          style={{ backgroundColor: "transparent" }}
          aria-label="settings"
        >
          <MoreHoriz onClick={props.openDialog} />
        </IconButton>
      )}
      title="Mr Reese"
    />
  );
}

export default UserCard;
