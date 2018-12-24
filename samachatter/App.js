import React, { Component } from "react";

import ChatRoom from "./chatRoom/view/ReactChatRoom";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col l8">
            <ChatRoom key={1} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
