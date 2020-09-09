import React from "react";
import {
  Grid,
  Hidden,
  Card,
  Typography,
  CardContent,
  Button,
  Box,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getDefaultUser } from "../data";
import { GearIcon } from "../icons";
import ProfileTabs from "../components/ProfileTabs";

const data = [
  {
    count: 6,
    category: "posts",
  },
  {
    count: 324,
    category: "followers",
  },
  {
    count: 434,
    category: "following",
  },
];

const useProfileStyles = makeStyles((theme) => ({
  container: {
    fontSize: "10px",
    width: "100%",
    marginTop: "10em",
    // backgroundColor: "chocolate",
  },
  image: {
    // width: (props) => (props.size === "big" ? "15em" : "15em"),
    // height: (props) => (props.size === "big" ? "7.5em" : "7.5em"),
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    marginLeft: "30em",
  },
  imageSmall: {
    width: "75px",
    height: "75px",
    borderRadius: "50%",
  },
  card: {
    marginLeft: "10em",
    background: "transparent",
    border: "none",
    marginTop: "-2em",
  },
  username: {
    fontSize: "2.8em",
    color: "#262626",
    fontWeight: 300,
  },
  count: {
    fontWeight: 600,
    color: "#262626",
    fontSize: "1.6em",
    // marginLeft: "0.5em",
  },
  category: {
    marginLeft: "4px",
  },
}));

function ProfilePage() {
  const classes = useProfileStyles();
  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item container direction="row">
        <Hidden xsDown>
          <ProfilePicture
            image="https://images.pexels.com/photos/4820763/pexels-photo-4820763.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            size="big"
          />
        </Hidden>
        <Hidden smUp>
          <ProfilePicture image="https://images.pexels.com/photos/4820763/pexels-photo-4820763.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </Hidden>
        <Hidden xsDown>
          <Card className={classes.card}>
            <CardContent>
              <Grid container direction="row" alignItems="center" spacing={2}>
                <Grid item>
                  <Typography className={classes.username}>
                    {getDefaultUser().username}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button variant="outlined">Edit Profile</Button>
                </Grid>
                <Grid item>
                  <GearIcon />
                </Grid>
              </Grid>
              <Grid
                style={{ marginTop: "1em" }}
                container
                direction="row"
                alignItems="center"
                spacing={2}
              >
                {data.map((val, i) => (
                  <Grid item key={i}>
                    <Grid item container direction="row" alignItems="center">
                      <span className={classes.count}>{val.count}</span>
                      <Typography className={classes.category}>
                        {val.category}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
              <Box component="div" style={{ marginTop: "2em" }}>
                <Typography className={classes.count}>
                  {getDefaultUser().name}
                </Typography>
                <Typography style={{ fontWeight: 400 }}>Bio</Typography>
              </Box>
            </CardContent>
          </Card>
        </Hidden>
      </Grid>
      <Grid
        item
        style={{
          width: "75%",
          marginTop: "10em",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Divider />
        <ProfileTabs />
      </Grid>
    </Grid>
  );
}

function ProfilePicture({ image, size, isOwner = false }) {
  const classes = useProfileStyles(size);
  return size === "big" ? (
    <img src={image} className={classes.image} alt="user" />
  ) : (
    <img src={image} className={classes.imageSmall} alt="user" />
  );
}

export default ProfilePage;
