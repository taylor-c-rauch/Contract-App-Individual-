//this component displays the submitted contracts from firebase
import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import firebase from "./firebase.js";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";

export default class Display extends Component {
  constructor() {
    super();
    //submitted state will hold info pulled from firebase
    this.state = { submitted: [] };
  }

  componentDidMount() {
    //get data from firebase
    const results = firebase.database().ref("contracts");
    //every time there is a change, take snapshot, iterate through and put in submitted state
    results.on("value", snapshot => {
      let submittedContracts = snapshot.val();
      let submitted = [];
      for (let form in submittedContracts) {
        submitted.push({
          name: submittedContracts[form].name,
          company: submittedContracts[form].company,
          details: submittedContracts[form].details,
          id: form
        });
      }
      this.setState({ submitted: submitted });
    });
  }

  //response when remove button is clicked
  handleRemove(e, id) {
    e.preventDefault();
    const RemoveForm = firebase.database().ref("/contracts/" + id);
    RemoveForm.remove();
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>Submitted Contracts</Toolbar>
        </AppBar>
        {this.state.submitted.map(form => (
          <div>
            <Card
              style={{
                marginLeft: 20,
                marginRight: 20,
                marginTop: 20,
                marginBottom: 20
              }}
            >
              <CardContent>
                <strong>Name: </strong> {form.name}
                <br />
                <strong>Company: </strong>
                {form.company}
                <br />
                <strong>Details: </strong>
                {form.details}
              </CardContent>
              <div align="center">
                <Button
                  mini
                  variant="fab"
                  onClick={e => this.handleRemove(e, form.id)}
                >
                  <DeleteIcon />
                </Button>
                <br />
                <br />
              </div>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}
