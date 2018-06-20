import React, { Component } from "react";
import "./App.css";

import Home from "./components/Home";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <Nav />
        </h1>
        <h1>Hello World!</h1>
        <h1>
          <Home />
        </h1>
      </div>
    );
  }
}

export default App;
