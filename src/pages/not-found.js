import React from "react";
import { Grid, Typography, useTheme } from "@material-ui/core";

import { Link } from "react-router-dom";
import SEO from "../shared/Seo";

function NotFound() {
  const theme = useTheme();
  return (
    <>
      <SEO title="Not Found" />
      <Grid
        style={{ marginTop: "90px" }}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography align="center" variant="h5" gutterBottom={5}>
            Sorry, this page isn't available
          </Typography>
          <Typography variant="subtitle2">
            The Link You Followed may be Broken, or the page is not available
            <Link
              style={{
                textDecoration: "none",
                color: theme.palette.primary.main,
              }}
              to="/"
            >
              {" "}
              Go Back To Instagram
            </Link>
          </Typography>
          <Typography variant="subtitle1" component="span" />
        </Grid>
      </Grid>
    </>
  );
}

export default NotFound;
