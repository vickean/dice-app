import React, { Component } from "react";

class Dice extends Component {
  state = {
    rollHist: []
  };
  render() {
    return (
      <div>
        <span className="p-2 m-1">Roll Value:</span>
        <span className="badge badge-info p-2 m-1">
          {this.props.die.rollValue}
        </span>
        <span className="p-2 m-1">History:</span>
        <span className="badge badge-success p-2 m-1">
          {this.props.die.rollHist.toString()}
        </span>
      </div>
    );
  }
}

export default Dice;
