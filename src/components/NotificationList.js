import React from "react";
import {
  Grid,
  Avatar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import useOutsideClick from "@rooks/use-outside-click";
import { makeStyles } from "@material-ui/core/styles";

import { defaultNotifications } from "../data";

const useNotificationListStyles = makeStyles((theme) => ({
  listContainer: {
    background: "rgba(var(--cdc,255,255,255),1)",
    borderRadius: "3px",
    border: "solid 1px rgba(var(--f23,255,255,255),1)",
    boxShadow: "0 0 5px rgba(var(--jb7,0,0,0),.0975)",
    display: "block",
    maxHeight: "362px !important",
    minHeight: "100px !important",
    overflowX: "hidden",
    overflowY: "auto",
    padding: "0",
    position: "absolute",
    top: "54px !important",
    right: "0",
    whiteSpace: "normal",
    maxWidth: "500px !important",
    width: "500px !important",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      right: 0,
    },
  },
  listItem: {
    background: "#fafafa",
    borderBottom: "solid 1px rgba(var(--b38,219,219,219),1)",
    "&:hover": {
      background: "rgba(var(--b3f,250,250,250),1)",
    },
    color: "black !important",
    width: "100% !important",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    minHeight: "40px !important",
    padding: "6px 8px 7px",
    position: "relative",
    justifyContent: "space-between",
  },
  listItemWrapper: {
    display: "flex",
    alignItems: "center",
    height: "50px",
    padding: "8px 16px",
  },
  avatarWrapper: {
    margin: "0 10px 0 0",
  },
  nameWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  typography: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "140px !important",
    },
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

function NotificationList({ notifications = defaultNotifications }) {
  const classes = useNotificationListStyles();
  const listContainerRef = React.useRef();

  return (
    <Grid ref={listContainerRef} className={classes.listContainer} container>
      {notifications.map((notification) => {
        const isLike = notification.type === "like";
        const isFollow = notification.type === "follow";

        return (
          <Grid key={notification.id} item className={classes.listItem}>
            <div className={classes.listItemWrapper}>
              <div className={classes.avatarWrapper}>
                <Avatar
                  src={notification.user.profile_image}
                  alt="User avatar"
                />
              </div>
              <div className={classes.nameWrapper}>
                <Link to={`/${notification.user.username}`}>
                  <Typography variant="body1">
                    {notification.user.username}
                  </Typography>
                </Link>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.typography}
                >
                  {isLike && `likes your photo. `}
                  {isFollow && `started following you.`}
                </Typography>
              </div>
            </div>
            <div>
              {console.log(isLike, isFollow)}
              {isLike && (
                <Link to={`/p/${notification.post.id}`}>
                  <Avatar src={notification.post.media} alt="post cover" />
                </Link>
              )}
              {isFollow && <Button className={classes.button}>Follow</Button>}
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default NotificationList;
