import React, { Component } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export default class ContractForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>Contract Form</Toolbar>
        </AppBar>

        <form>
          <TextField
            id="name"
            label="Name"
            fullWidth
            value={this.props.name}
            onChange={e => this.props.update("name", e.target.value)}
          />
          <TextField
            id="company"
            label="Company"
            fullWidth
            value={this.props.company}
            onChange={e => this.props.update("company", e.target.value)}
          />
          <TextField
            alue={this.props.details}
            id="details"
            multiline
            rows="4"
            label="Details"
            fullWidth
            onChange={e => this.props.update("details", e.target.value)}
          />
          <br />
          <br />
          <Button variant="contained" onClick={e => this.props.submit(e)}>
            {" "}
            Submit{" "}
          </Button>
        </form>
      </div>
    );
  }
}
