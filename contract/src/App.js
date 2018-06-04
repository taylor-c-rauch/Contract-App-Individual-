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
      details: ""
    };
  }
  render() {
    return (
      <center>
        <ContractForm />
        <br />
        <br />
        <Display />
      </center>
    );
  }
}
