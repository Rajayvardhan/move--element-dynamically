import React, { Component } from "react";
import './App.css';
class App extends Component {

  // Create state
  state = {
    xoffset: 550,
    yoffset: 0,
    delta: 10,
  };

  moveTitleToDown = () => {
    this.setState(
      {
        yoffset: this.state.yoffset
          + this.state.delta
      });
  };
  moveTitleToRight = () => {
    this.setState(
      {
        xoffset: this.state.xoffset
          + this.state.delta
      });
  };
  moveTitleToLeft = () => {
    this.setState(
      {
        xoffset: this.state.xoffset
          - this.state.delta
      });
  };
  moveTitleToUp = () => {
    this.setState(
      {
        yoffset: this.state.yoffset
          - this.state.delta
      });
  };

  render() {
    return (
      <div >
        {/* Element to Move Dynamically */}
        <div
          style={{
            position: "absolute",
            left: `${this.state.xoffset}px`,
            top: `${this.state.yoffset}px`,
          }}
          className="box">
          move to this press the button
        </div>

        {/* Move Controls */}
        <div className="container" >
          <button onClick={this.moveTitleToRight} className="button-29" >
            Move box To Right
          </button>
          <button onClick={this.moveTitleToDown} className="button-29">
            Move box To Down
          </button>
          <button onClick={this.moveTitleToLeft} className="button-29">
            Move box To Left
          </button>
          <button onClick={this.moveTitleToUp} className="button-29">
            Move box To Up
          </button>
        </div>
      </div>
    );
  }
}

export default App;
