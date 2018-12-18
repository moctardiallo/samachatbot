import React, { Component } from "react";

import Message from "./message/SimpleMessage";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Message message="Hello" />
      </div>
    );
  }
}

export default App;
