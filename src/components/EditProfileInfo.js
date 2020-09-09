import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  TextField,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { CheckBox } from "@material-ui/icons";
import { defaultCurrentUser } from "../data";

const user = defaultCurrentUser;
const useEditProfileInfo = makeStyles((theme) => ({
  container: {
    borderRadius: "unset",
    fontSize: "10px",
    height: "100%",
  },
  gridItemLeft: {
    marginLeft: "1em",
    minWidth: "19.2em",
    maxWidth: "19.2em",
    marginTop: "2em",
    textAlign: "right",
    position: "relative",
  },
  gridItemRight: {
    marginTop: "2em",
    marginLeft: "2em",
  },
  button: {
    padding: "0px",
    marginRight: "-1em",
    color: theme.palette.primary.main,
    "&:hover": {
      background: "transparent",
    },
  },
  label: {
    fontSize: "16px",
    fontWeight: 600,
  },
  textField: {
    padding: "10px !important",
  },
  avatar: {
    position: "absolute",
    right: "0",
    top: "0",
    marginTop: "-1em",
  },
}));

function EditProfileInfo() {
  const classes = useEditProfileInfo();

  return (
    <Card className={classes.container}>
      <CardContent>
        <Grid container direction="column">
          <Grid item>
            <Grid container direction="row" alignItems="center">
              <Grid
                item
                className={classes.gridItemLeft}
                style={{ backgroundColor: "red" }}
              >
                <Avatar className={classes.avatar}>
                  <img src={user.profile_image} alt="user" />
                </Avatar>
              </Grid>
              <Grid
                style={{ maxHeight: "4.3em", padding: "0" }}
                item
                className={classes.gridItemRight}
              >
                <Typography
                  style={{
                    fontSize: "20px",
                    color: "#262626",
                    fontWeight: 400,
                    marginTop: "-0.4em",
                  }}
                >
                  {user.username}
                </Typography>

                <Button className={classes.button}>Change Photo</Button>
              </Grid>
            </Grid>
          </Grid>
          {/* 2 Row */}
          <Grid item>
            <Grid container direction="row" wrap="nowrap">
              <Grid item className={classes.gridItemLeft}>
                <Typography className={classes.label}>Name</Typography>
              </Grid>
              <Grid item className={classes.gridItemRight}>
                <TextField
                  fullWidth
                  variant="outlined"
                  value={user.name}
                  inputProps={{
                    className: classes.textField,
                  }}
                />
                <br />
                <Typography variant="caption">
                  Help people discover your account by using the name you're
                  known by: either your full name, nickname, or business name.
                  <br />
                  <br />
                  You can only change your name twice within 14 days
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/*  3 Row */}
          <Grid item>
            <Grid container direction="row" wrap="nowrap">
              <Grid item className={classes.gridItemLeft}>
                <Typography className={classes.label}>Username</Typography>
              </Grid>
              <Grid item className={classes.gridItemRight}>
                <TextField
                  fullWidth
                  variant="outlined"
                  value={user.username}
                  inputProps={{
                    className: classes.textField,
                  }}
                />
                <br />
                <Typography variant="caption">
                  In most cases, you'll be able to change your username back to
                  hemanth_a47 for another 14 days. Learn More
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/*  4 row */}
          <Grid item>
            <Grid container direction="row" wrap="nowrap">
              <Grid item className={classes.gridItemLeft}>
                <Typography className={classes.label}>Website</Typography>
              </Grid>
              <Grid item className={classes.gridItemRight}>
                <TextField
                  fullWidth
                  variant="outlined"
                  value={user.website}
                  inputProps={{
                    className: classes.textField,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/*  5 row */}
          <Grid item>
            <Grid container direction="row" wrap="nowrap">
              <Grid item className={classes.gridItemLeft}>
                <Typography className={classes.label}>Bio</Typography>
              </Grid>
              <Grid item className={classes.gridItemRight}>
                <TextareaAutosize value={user.website} placeholder="bio" />
                <br />
                <Typography variant="caption">
                  Personal Information Provide your personal information, even
                  if the account is used for a business, a pet or something
                  else. This won't be a part of your public profile.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/*  6 row */}
          <Grid item>
            <Grid container direction="row" wrap="nowrap">
              <Grid item className={classes.gridItemLeft}>
                <Typography className={classes.label}>Email</Typography>
              </Grid>
              <Grid item className={classes.gridItemRight}>
                <TextField
                  fullWidth
                  variant="outlined"
                  value={user.email}
                  inputProps={{
                    className: classes.textField,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/*  7  row */}
          <Grid item>
            <Grid container direction="row" wrap="nowrap">
              <Grid item className={classes.gridItemLeft}>
                <Typography className={classes.label}>Phone</Typography>
              </Grid>
              <Grid item className={classes.gridItemRight}>
                <TextField
                  fullWidth
                  variant="outlined"
                  value={user.phone_number}
                  inputProps={{
                    className: classes.textField,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/*  8 row */}
          <Grid item>
            <Grid container direction="row" wrap="nowrap">
              <Grid item className={classes.gridItemLeft}>
                <Typography className={classes.label}>Gender</Typography>
              </Grid>
              <Grid item className={classes.gridItemRight}>
                <TextField
                  fullWidth
                  variant="outlined"
                  value="male"
                  inputProps={{
                    className: classes.textField,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/*  9 row */}
          <Grid item>
            <Grid container direction="row" wrap="nowrap">
              <Grid item className={classes.gridItemLeft}>
                <Typography className={classes.label}>
                  Similar Account Suggestions
                </Typography>
              </Grid>
              <Grid item className={classes.gridItemRight}>
                <Grid
                  wrap="nowrap"
                  justify="space-evenly"
                  container
                  direction="row"
                >
                  <Grid item>
                    <CheckBox />
                  </Grid>
                  <Grid item>
                    <Typography variant="caption" style={{ width: "5em" }}>
                      Include your account when recommending similar accounts
                      people might want to follow
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/*  10 row */}
          <Grid item>
            <Grid container direction="row" wrap="nowrap">
              <Grid item className={classes.gridItemLeft} />
              <Grid item className={classes.gridItemRight}>
                <Grid item container direction="row">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Submit
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button color="primary" style={{ marginLeft: "4em" }}>
                      Temporarily disable my account
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default EditProfileInfo;
