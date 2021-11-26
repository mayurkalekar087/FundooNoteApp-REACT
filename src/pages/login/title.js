import { Grid } from "@material-ui/core";
import React from "react";

class Title extends React.Component {
  render() {
    return (
      <Grid>
        <h2 data-testid="title">
          <span className="txtStyle">F</span>
          <span className="txtStyle2">u</span>
          <span className="txtStyle">n</span>
          <span className="txtStyle3">d</span>
          <span className="txtStyle">o</span>
          <span className="txtStyle2"> N</span>
          <span className="txtStyle3">o</span>
          <span className="txtStyle">t</span>
          <span className="txtStyle2">e</span>
        </h2>
      </Grid>
    );
  }
}
export default Title;