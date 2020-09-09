/* eslint-disable consistent-return */
import React from "react";
import {
  Drawer,
  List,
  ListItem,
  Grid,
  Divider,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EditProfileInfo from "../components/EditProfileInfo";

const useEditProfileStyles = makeStyles((theme) => ({
  container: {
    fontSize: "10px",
    marginTop: "10em",
    width: "100%",
    height: "82em",
  },
  leftGrid: {
    width: "30%",
    height: "100%",
    position: "relative",
  },
  rightGrid: {
    width: "69em",
    height: "100%",
  },
  permanentDrawerPaper: {
    borderRight: "1px solid #dbdbdb !important",
    left: "unset !important",
    top: "unset !important",
    position: "relative !important",
  },
  permanentDrawerRoot: {
    height: "100% !important",
    width: "50%",
    marginLeft: "auto",
    "& div": {
      zIndex: "unset !important",
    },
  },
}));

const options = [
  "Edit Profile",
  "Change Password",
  "Apps and Websites",
  "Email and SMS",
  "Push Notifications",
  "Manage Contacts",
  "Privacy and Security",
  "Login Activity",
  "Emails from Instagram",
];

function EditProfile({ history }) {
  const classes = useEditProfileStyles();

  function handleSelected(index) {
    const path = history.location.pathname;

    switch (index) {
      case 0:
        return path.includes("edit");
      default:
        break;
    }
  }

  function handleListClick(index) {
    switch (index) {
      case 0:
        history.push("/accounts/edit");
        break;
      default:
        break;
    }
  }

  const drawer = (
    <List>
      {options.map((option, index) => (
        <ListItem
          key={option}
          button
          selected={handleSelected(index)}
          onClick={() => handleListClick(index)}
        >
          <ListItemText primary={option} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Grid container direction="row" className={classes.container}>
      <Grid item className={classes.leftGrid} justify="flex-end">
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: classes.permanentDrawerPaper,
            root: classes.permanentDrawerRoot,
          }}
        >
          {drawer}
        </Drawer>
      </Grid>
      <Grid item className={classes.rightGrid}>
        <EditProfileInfo />
      </Grid>
    </Grid>
  );
}

export default EditProfile;
