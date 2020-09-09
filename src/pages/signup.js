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

import { useHistory, Link } from "react-router-dom";

import InstaLogo from "../images/logo.png";
import FacebookIconWhite from "../images/facebook-icon-white.png";
import SEO from "../shared/Seo";
import { AuthContext } from "../auth";

const useSignupStyles = makeStyles((theme) => ({
  signupContainer: {
    marginTop: "90px",
    fontSize: 10,
  },
  card: {
    minWidth: "35em",
    maxWidth: "35em",
    marginTop: "1em",
    marginBottom: "1em",
  },
  cardSubHeader: {
    fontWeight: "bold",
    color: "#999",
    marginTop: "1em",
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

function Signup() {
  const classes = useSignupStyles();
  const { signUpWithEmailAndPassword } = React.useContext(AuthContext);
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    username: "",
    fullname: "",
  });
  const history = useHistory();

  function handleOnChange(event) {
    const { name, value } = event.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await signUpWithEmailAndPassword(values);
  }

  return (
    <Grid className={classes.signupContainer} container>
      <SEO title="Sign Up" />
      <Grid item container direction="column" alignItems="center">
        <Card className={classes.card}>
          <CardContent>
            <Grid container direction="column" alignItems="center">
              <Grid item alignItems="center">
                <img src={InstaLogo} alt="Instagram" />
              </Grid>
              <Typography align="center" className={classes.cardSubHeader}>
                Signup to see photos and videos from friends
              </Typography>
              <Grid style={{ marginTop: "2em", marginBottom: "1em" }}>
                <Button color="secondary" variant="contained">
                  <img
                    className={classes.facebookLogo}
                    src={FacebookIconWhite}
                    alt="FaceBook Login"
                  />
                  Log in with Facebook
                </Button>
              </Grid>
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
              <TextField
                className={classes.textField}
                placeholder="Email"
                type="text"
                name="email"
                variant="filled"
                fullWidth
                onChange={handleOnChange}
                // label="Email"
              />
              <form onSubmit={handleSubmit}>
                <TextField
                  className={classes.textField}
                  placeholder="Full Name"
                  type="text"
                  name="fullname"
                  variant="filled"
                  fullWidth
                  label="Full Name"
                  onChange={handleOnChange}
                />
                <TextField
                  className={classes.textField}
                  placeholder="Username, email or Mobile"
                  type="text"
                  name="username"
                  variant="filled"
                  fullWidth
                  label="Username"
                  onChange={handleOnChange}
                />
                <TextField
                  className={classes.textField}
                  placeholder="password"
                  type="password"
                  name="password"
                  variant="filled"
                  fullWidth
                  label="Password"
                  onChange={handleOnChange}
                />
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  type="submit"
                  className={classes.button}
                >
                  Sign Up
                </Button>
              </form>
            </Grid>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Grid container direction="row" justify="center">
              <Grid item>
                <Typography variant="body2">
                  Already have an Account?
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <Button color="primary">Log In</Button>
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

export default Signup;
