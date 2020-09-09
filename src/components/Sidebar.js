import React from "react";
import { Grid, Typography, Paper, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import UserCard from "../shared/UserCard";

const footerLinks = [
  {
    name: "about",
    link: "/",
  },
  {
    name: "help",
    link: "/",
  },
  {
    name: "press",
    link: "/",
  },
  {
    name: "jobs",
    link: "/",
  },
  {
    name: "privacy",
    link: "/",
  },
  {
    name: "api",
    link: "/",
  },
  {
    name: "terms",
    link: "/",
  },
  {
    name: "locations",
    link: "/",
  },
  {
    name: "top accounts",
    link: "/",
  },
  {
    name: "hashtag",
    link: "/",
  },
  {
    name: "language",
    link: "/",
  },
];

const useSidebarStyles = makeStyles((theme) => ({
  sidebarContainer: {
    width: "100%",
    backgroundColor: "#fafafa",
    // backgroundColor: "green",
  },

  card: {
    minWidth: "30em",
    backgroundColor: "#fafafa",
    border: "none",
  },
  button: {
    padding: "0px",
    "&:hover": {
      background: "transparent",
    },
  },
  suggestionsContainer: {
    marginTop: "1em",
  },
  link: {
    textDecoration: "none",
    "&:visited": {
      color: "transparent",
    },
    color: "#999",
  },
}));

function Sidebar(props) {
  const classes = useSidebarStyles();
  return (
    <Grid
      justify="center"
      className={classes.sidebarContainer}
      container
      direction="column"
    >
      <Grid item>
        <Paper elevation={0} className={classes.card}>
          <UserCard side feed={props.feed} />
        </Paper>
      </Grid>
      <Grid
        alignItems="center"
        item
        container
        justify="space-between"
        direction="row"
        style={{ color: "#8e8e8e", marginTop: "1em" }}
      >
        <Typography variant="subtitle2">Suggestions For You</Typography>
        <Button className={classes.button}>See All</Button>
      </Grid>
      <Grid
        className={classes.suggestionsContainer}
        item
        container
        direction="column"
      >
        <UserCard sideSuggestion feed={props.feed} />
        <UserCard sideSuggestion feed={props.feed} />
        <UserCard sideSuggestion feed={props.feed} />
        <UserCard sideSuggestion feed={props.feed} />
        <UserCard sideSuggestion feed={props.feed} />
      </Grid>
      <Grid container item direction="row">
        <Link to="/" className={classes.link}>
          <Typography variant="body2">Something</Typography>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Sidebar;
