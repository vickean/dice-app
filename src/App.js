import React, { Component } from "react";
import "./App.css";
import RollButton from "./components/rollButton";
import DiceBox from "./components/diceBox";

// dice types: D4, D6, D8, D10, D12, D20, Percentile

class App extends Component {
  state = {
    dice: [
      {
        id: 1,
        minValue: 1,
        maxValue: 6,
        rollValue: 0,
        rollHist: [0, 0, 0, 0, 0]
      },
      {
        id: 2,
        minValue: 1,
        maxValue: 9,
        rollValue: 0,
        rollHist: [0, 0, 0, 0, 0]
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <RollButton
          onDiceRoll={() => {
            this.handleDiceRoll(this.state.dice);
            this.handleRollHist(this.state.dice);
          }}
        />
        <DiceBox dice={this.state.dice} />
      </React.Fragment>
    );
  }

  handleDiceRoll(dice) {
    dice.forEach(e => {
      const rollValue = Math.floor(Math.random() * e.maxValue + e.minValue);
      e.rollValue = rollValue;
    });
    this.setState({ dice });
  }

  handleRollHist(dice) {
    let diceUpdate = dice.map(e => {
      let rollHist = [e.rollValue, ...e.rollHist];
      if (rollHist.length > 5) {
        rollHist.splice(5, 1);
      }
      e.rollHist = rollHist;
      return e;
    });
    this.setState({ dice: diceUpdate });
  }
}

export default App;
