import React, { useContext } from "react";
import { Divider, Grid, Typography } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { GearIcon, SaveIcon, UserIcon } from "../icons";
import { AuthContext } from "../auth";

const useProfileTooltipStyles = makeStyles((theme) => ({
  container: {
    width: "230px",
    height: "148px",
    padding: "5px",
    fontSize: "14px",
  },
  link: {
    textDecoration: "none",
    "&:visited": {
      color: "transparent",
    },
    color: "#999",
  },
}));

const list = [
  {
    icon: <UserIcon />,
    name: "Profile",
    to: "/user",
  },
  {
    icon: <SaveIcon />,
    name: "Saved",
    to: "/user",
  },
  {
    icon: <GearIcon />,
    name: "Settings",
    to: "/accounts/edit",
  },
];

function ProfileTooltip() {
  const classes = useProfileTooltipStyles();
  const { demoLogout } = useContext(AuthContext);
  const history = useHistory();
  return (
    <Grid className={classes.container} container direction="column">
      <Grid item>
        {list.map((listItem) => (
          <Link to={listItem.to} className={classes.link}>
            <Grid
              style={{ marginBottom: "auto" }}
              container
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <Grid item>{listItem.icon}</Grid>
              <Grid item>{listItem.name}</Grid>
            </Grid>
          </Link>
        ))}
      </Grid>
      <Divider />
      <Grid item>
        <Grid
          container
          direction="row"
          alignItems="center"
          style={{ padding: "2px" }}
        >
          <Grid item style={{ cursor: "pointer" }}>
            <Typography
              onClick={() => {
                demoLogout();
                history.push("/login");
              }}
            >
              Logout
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProfileTooltip;
