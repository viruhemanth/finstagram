import React from "react";
import { Typography, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import IconSheet from "../images/icon-sheet.png";

const useNavbarStyles = makeStyles((theme) => ({
  followers: {
    backgroundImage: `url(${IconSheet})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-249px -160px",
    height: 16,
    width: 16,
    margin: "0 5px",
    display: "block",
  },
  likes: {
    backgroundImage: `url(${IconSheet})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-385px -126px",
    height: 18,
    width: 18,
    margin: "0 5px",
    display: "block",
  },
  tooltipContainer: {
    display: "flex",
    alignItems: "center",
    "& div": {
      margin: "0 5px",
    },
  },
  tooltip: {
    display: "flex",
    alignItems: "center",
  },
}));

function NotificationTooltip({ notifications }) {
  const classes = useNavbarStyles();
  const followCount = countNotifications("follow");
  const likeCount = countNotifications("like");

  function countNotifications(notificationType) {
    return notifications.filter(({ type }) => type === notificationType).length;
  }

  return (
    <div className={classes.tooltipContainer}>
      {followCount > 0 && (
        <div className={classes.tooltip}>
          <span aria-label="Followers" className={classes.followers} />
          <Typography>{followCount}</Typography>
        </div>
      )}
      {likeCount > 0 && (
        <div className={classes.tooltip}>
          <span aria-label="Likes" className={classes.likes} />
          <Typography>{likeCount}</Typography>
        </div>
      )}
    </div>
  );
}

export default NotificationTooltip;
