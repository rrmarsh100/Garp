import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      ticker: props.tickerStart
    };
  }

  onTick() {
    this.setState({
      ticker: (this.state.ticker += 1)
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.ticker}</p>
        <button onClick={() => this.onTick()} className="btn btn-primary">
          Tick !
        </button>
      </div>
    );
  }
}

export default Home;
