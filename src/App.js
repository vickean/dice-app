import React, { Component } from "react";
import "./App.css";
import Dice from "./components/dice";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Dice />
      </React.Fragment>
    );
  }
}

export default App;
