import React from "react";
import { Grid, Button, Dialog, Divider, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useOptionsDialogStyles = makeStyles((theme) => ({
  container: {
    fontSize: "10px",
    minWidth: "40em",
  },
  RedButton: {
    fontSize: "bold",
    color: theme.palette.error.main,
  },
}));

function OptionsDialog({ onClose, postId }) {
  const classes = useOptionsDialogStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <Dialog
          classes={{ paper: classes.container }}
          open
          onClose={onClose}
          TransitionComponent={Zoom}
        >
          <Button fullWidth className={classes.RedButton}>
            Unfollow
          </Button>
          <Divider />
          <Button className={classes.button}>
            <Link to={`/p/${postId}`}>Go to post</Link>
          </Button>
          <Divider />
          <Button>Share</Button>
          <Divider />
          <Button>Copy Link</Button>
          <Divider />
          <Button fullWidth onClick={onClose}>
            Close
          </Button>
        </Dialog>
      </Grid>
    </Grid>
  );
}

export default OptionsDialog;
