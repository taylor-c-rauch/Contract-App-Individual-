//this component holds the text fields to take input, and the submission button
import React, { Component } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default class ContractForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <AppBar position="static" style={{ backgroundColor: "#07575B" }}>
          <br />
        </AppBar>
        <AppBar position="static" style={{ backgroundColor: "#66A5AD" }}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              Contract Form
            </Typography>
          </Toolbar>
        </AppBar>

        <Card
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            marginBottom: 20,
            backgroundColor: "#eff7f9"
          }}
        >
          <CardContent>
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
              value={this.props.details}
              id="details"
              multiline
              rows="4"
              label="Details"
              fullWidth
              onChange={e => this.props.update("details", e.target.value)}
            />
          </CardContent>
        </Card>
        <center>
          <Grid container justify="center" spacing={8}>
            <Grid item>
              <Button onClick={e => this.props.submit(e)}> Submit </Button>
            </Grid>
            <Grid item>
              <Button onClick={e => this.props.clear(e)}> Clear </Button>
            </Grid>
          </Grid>
        </center>
      </div>
    );
  }
}
