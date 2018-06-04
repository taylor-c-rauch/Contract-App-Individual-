import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import firebase from "./firebase.js";

export default class Display extends Component {
  constructor(props) {
    super();
    this.state = { submitted: [] };
  }
  componentDidMount() {
    const results = firebase.database().ref("contracts");
    results.on("value", snapshot => {
      let submittedContracts = snapshot.val();
      let submitted = [];
      for (let form in submittedContracts) {
        submitted.push({
          name: submittedContracts[form].name,
          company: submittedContracts[form].company,
          details: submittedContracts[form].details
        });
      }
      this.setState({ submitted: submitted });
    });
  }
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>Submitted Contracts</Toolbar>
        </AppBar>
        {this.state.submitted.map(form => (
          <div>
            <Card>
              <CardContent>
                <strong>Name: </strong> {form.name}
                <br />
                <strong>Company: </strong>
                {form.company}
                <br />
                <strong>Details: </strong>
                {form.details}
                <br />
              </CardContent>
            </Card>
            <br />
          </div>
        ))}
      </div>
    );
  }
}
