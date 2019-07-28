import React, { Component } from "react";
import "./App.css";
import RollButton from "./components/rollButton";
import Dice from "./components/dice";

class App extends Component {
  state = {
    dice: [
      {
        id: 1,
        minValue: 1,
        maxValue: 6,
        rollValue: 7,
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
          }}
        />
        <Dice id="1" rollValue={this.state.dice[0].rollValue} />
      </React.Fragment>
    );
  }

  handleDiceRoll(dice) {
    const diceIndex = dice.findIndex(x => x.id === 1);
    const rollValue = Math.floor(
      Math.random() * dice[diceIndex].maxValue + dice[diceIndex].minValue
    );
    dice[diceIndex].rollValue = rollValue;
    this.setState({ dice });
  }

  editRollHist() {
    let rollHist = [this.state.rollValue, ...this.state.rollHist];
    if (rollHist.length > 5) {
      rollHist.splice(5, 1);
    }
    this.setState({ rollHist });
  }
}

export default App;
