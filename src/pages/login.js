import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
  Typography,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";
import InstaLogo from "../images/logo.png";
import FacebookIconBlue from "../images/facebook-icon-blue.svg";
import SEO from "../shared/Seo";

const useLoginStyles = makeStyles((theme) => ({
  loginContainer: {
    marginTop: "90px",
    fontSize: 10,
  },
  card: {
    minWidth: "35em",
    maxWidth: "35em",
    marginTop: "2em",
  },
  textField: {
    marginTop: "1.5em",
  },
  button: {
    marginTop: "1.5em",
    marginBottom: "1.5em",
    padding: "0.3em",
  },
  orLine: {
    height: "0.1em",
    width: "30%",
    justifySelf: "stretch",
    backgroundColor: "#e6e6e6",
  },
  facebookLogo: {
    marginRight: "0.5em",
    height: "1.5em",
    width: "1.5em",
  },
}));

function Login() {
  const classes = useLoginStyles();
  return (
    <Grid className={classes.loginContainer} container>
      <SEO title="Login" />
      <Grid item container direction="column" alignItems="center">
        <Card className={classes.card}>
          <CardContent>
            <Grid container direction="column" alignItems="center">
              <Grid item alignItems="center">
                <img src={InstaLogo} alt="Instagram" />
              </Grid>
              <TextField
                className={classes.textField}
                placeholder="Username, email or Mobile"
                type="text"
                name="input"
                variant="filled"
                fullWidth
                label="username"
              />
              <TextField
                className={classes.textField}
                placeholder="password"
                type="password"
                name="input"
                variant="filled"
                fullWidth
                label="password"
              />
              <Button
                variant="contained"
                fullWidth
                color="primary"
                type="submit"
                className={classes.button}
              >
                Login
              </Button>
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
              >
                <div className={classes.orLine} />
                <Typography color="textSecondary" variant="body2">
                  OR
                </Typography>
                <div className={classes.orLine} />
              </Grid>
              <Grid style={{ marginTop: "2em", marginBottom: "1em" }}>
                <Button color="secondary">
                  <img
                    className={classes.facebookLogo}
                    src={FacebookIconBlue}
                    alt="FaceBook Login"
                  />
                  Log in with Facebook
                </Button>
              </Grid>
              <Button color="primary">Forgot Password?</Button>
            </Grid>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Grid container direction="row" justify="center">
              <Grid item>
                <Typography variant="body2">
                  Dont have an Account?
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    <Button color="primary">Signup</Button>
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Login;
