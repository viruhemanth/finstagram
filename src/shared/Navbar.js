import React from "react";
import {
  AppBar,
  Toolbar,
  InputBase,
  Box,
  Tooltip,
  Zoom,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Search } from "@material-ui/icons";

import { Link, useHistory } from "react-router-dom";
import InstaLogo from "../images/logo.png";
import {
  AddIcon,
  ExploreIcon,
  HomeIcon,
  LikeIcon,
  ExploreActiveIcon,
  HomeActiveIcon,
  LikeActiveIcon,
} from "../icons";
import UserCard from "./UserCard";
import NotificationTooltip from "../components/NotificationTooltip";
import { defaultNotifications } from "../data";
import NotificationList from "../components/NotificationList";

const useNavbarStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
    borderBottomWidth: "5px solid #111",
    fontSize: "10px",
    minHeight: "5.3em",
    maxHeight: "5.3em",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    margin: "0 auto",
    position: "relative",
    left: "10em",
  },
  searchContainer: {
    height: "2.8em",
    width: "21.5em",
    backgroundColor: "#fafafa",
    border: "1px solid #dbdbdb",
    borderRadius: "0.4em",
    margin: "0px auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    left: "5em",
  },
  searchInput: {
    height: "75%",
    color: "#999",
    fontSize: "1.4em",
  },
  menuIconsContainer: {
    height: "5.3em",
    width: "22.5em",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "0 auto",
    position: "relative",
    right: "5em",
  },
  menuIcon: {
    margin: "0 auto",
  },
  notifications: {
    position: "relative",
    "&::after": {
      right: 10,
      width: 4,
      bottom: "-5px",
      height: 4,
      margin: "0 auto",
      position: "absolute",
      background: "#ed4956",
      transition: "bottom .2s ease-in-out",
      borderRadius: 2,
      content: '""',
    },
  },
}));

const WhiteTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 500,
    maxHeight: 362,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const RedTooltip = withStyles({
  popper: {
    zIndex: "1100 !important",
  },
  arrow: {
    color: "#ed4956",
  },
  tooltip: {
    backgroundColor: "#ed4956",
    color: "#fff",
  },
})(Tooltip);

function Navbar() {
  const classes = useNavbarStyles();
  const [hideNavbar, setHideNavbar] = React.useState(false);
  const [showTooltip, setTooltip] = React.useState(false);
  const [showList, setList] = React.useState(false);
  const [openNotifications, setOpenNotifications] = React.useState(false);

  const history = useHistory();
  const path = history.location.pathname;

  const toggleNotifications = () => {
    console.log("Triggered");
    setOpenNotifications((prevState) => !prevState);
  };

  const toggleList = () => {
    setList((prevState) => !prevState);
  };

  const hideList = () => {
    setList(false);
  };

  React.useEffect(() => {
    setTooltip(false);
    setTimeout(() => {
      setTooltip(true);
    }, 2000);
    setTooltip(false);
  }, [showTooltip]);

  return hideNavbar ? null : (
    <AppBar className={classes.appBar}>
      <Link to="/">
        <img
          className={classes.logo}
          src={InstaLogo}
          alt="Instagram"
          href="/"
        />
      </Link>
      <Box className={classes.searchContainer}>
        <Search
          style={{
            fontSize: 17,
            color: "#999",
            margin: "0 0.5em",
          }}
        />
        <InputBase placeholder="Search" className={classes.searchInput} />
      </Box>
      <Box className={classes.menuIconsContainer}>
        {showList && <NotificationList notifications={defaultNotifications} />}
        <AddIcon height={20} className={classes.menuIcon} />
        <Link to="/" className={classes.menuIcon}>
          {path === "/" ? <HomeActiveIcon /> : <HomeIcon />}
        </Link>
        <Link to="/explore" className={classes.menuIcon}>
          {path === "/explore" ? <ExploreActiveIcon /> : <ExploreIcon />}
        </Link>
        <RedTooltip
          arrow
          title={<NotificationTooltip notifications={defaultNotifications} />}
          TransitionComponet={Zoom}
          open={showTooltip}
          onClose={toggleNotifications}
          interactive
        >
          <div
            className={classes.menuIcon}
            style={{ cursor: "pointer" }}
            onClick={toggleList}
          >
            {showList ? (
              <LikeActiveIcon className={classes.notifications} height={22} />
            ) : (
              <LikeIcon className={classes.notifications} height={22} />
            )}
          </div>
        </RedTooltip>
      </Box>
    </AppBar>
  );
}

export default Navbar;
