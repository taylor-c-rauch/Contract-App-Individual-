import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class Display extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>Submitted Contracts</Toolbar>
        </AppBar>
      </div>
    );
  }
}
