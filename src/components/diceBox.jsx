import React, { Component } from "react";
import Dice from "./dice";

class DiceBox extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.dice.map(die => (
          <Dice key={die.id} die={die} />
        ))}
      </div>
    );
  }
}

export default DiceBox;
