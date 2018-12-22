import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Header from "./components/Header";
class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "LOS ANGELES"
    };
  }
  changeTitle(title) {
    this.setState({ title });
  }

  render() {
    return (
      <div className="App">
        <div>
          {/* Here I passs the value of props in header components */}
          <Header
            changeTitle={this.changeTitle.bind(this)}
            title={this.state.title}
          />
        </div>
        <div>
          <Greet />
        </div>
      </div>
    );
  }
}

export default App;
