import React, { Component } from "react";

class RollButton extends Component {
  state = {};
  render() {
    return (
      <button onClick={this.props.onDiceRoll} className="btn btn-primary m-2">
        Roll!
      </button>
    );
  }
}

export default RollButton;
