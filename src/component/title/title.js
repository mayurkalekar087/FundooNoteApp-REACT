import { Grid } from "@material-ui/core";
import React from "react";

class Title extends React.Component {
  render() {
    return (
      <Grid>
        <h2 data-testid="title">
          <span className="textStyle">F</span>
          <span className="textStyle2">u</span>
          <span className="textStyle">n</span>
          <span className="textStyle3">d</span>
          <span className="textStyle">o</span>
          <span className="textStyle3">o</span>
          <span className="textStyle2"> N</span>
          <span className="textStyle3">o</span>
          <span className="textStyle">t</span>
          <span className="textStyle2">e</span>
          <span className="textStyle">s</span>
        </h2>
      </Grid>
    );
  }
}
export default Title;