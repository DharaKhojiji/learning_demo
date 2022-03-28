import React, { Component } from "react";

class ClassCounterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }
  componentDidMount() {
    document.title = `clicked ${this.state.count}times `;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count != this.state.count) {
      document.title = `clciked ${this.state.count}times`;
      console.log("updateing document title");

    }
  }
  buttonHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        ></input>
        <button onClick={this.buttonHandler}>click{this.state.count}</button>
      </div>
    );
  }
}

export default ClassCounterOne;
