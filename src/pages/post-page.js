import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

import Post from "../components/Post";

const usePostPageStyles = makeStyles((theme) => ({
  container: {
    fontSize: "10px",
    height: "60em",
    maxWidth: "93em",
    marginTop: "10em",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "10em",
  },
}));

function PostPage() {
  const classes = usePostPageStyles();
  return (
    <Box className={classes.container}>
      <Post />
    </Box>
  );
}

export default PostPage;
