import React, { Component } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export default class ContractForm extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>Contract Form</Toolbar>
        </AppBar>

        <form>
          <TextField id="name" label="Name" fullWidth />
          <TextField id="company" label="Company" fullWidth />
          <TextField
            id="details"
            multiline
            rows="4"
            label="Details"
            fullWidth
          />
          <br />
          <br />
          <Button variant="contained"> Submit </Button>
        </form>
      </div>
    );
  }
}
