import React, { Component } from "react";

import ChatRoom from "./chatRoom/SimpleChatRoom";

class App extends Component {
  state = {
    messages: ["Hello", "Hi", "Hello", "Hi", "Hello", "hi"]
  };
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col l5">
            <ChatRoom messages={this.state.messages} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
