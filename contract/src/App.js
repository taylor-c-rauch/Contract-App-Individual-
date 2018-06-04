import React, { Component } from "react";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ContractForm from "./ContractForm.js";
import Display from "./Display.js";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      company: "",
      details: "",
      submitted: []
    };
  }
  updateField(field, newVal) {
    this.setState({ [field]: newVal });
  }
  handleClick(e) {
    e.preventDefault();
    let form = {
      name: this.state.name,
      company: this.state.company,
      details: this.state.details
    };
    let results = this.state.submitted;
    results.push(form);
    this.setState({ submitted: results });
    this.setState({ name: "", company: "", details: "" });
  }

  render() {
    return (
      <center>
        <ContractForm
          update={(field, newVal) => this.updateField(field, newVal)}
          name={this.state.name}
          company={this.state.company}
          details={this.state.details}
          submit={e => this.handleClick(e)}
        />
        <br />
        <br />
        <Display contracts={this.state.submitted} />
      </center>
    );
  }
}
