import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Grid>
      <h1>Page Not Found</h1>
      <Link to="/login">Back To Login Page</Link>
    </Grid>
  );
};

export default ErrorPage;