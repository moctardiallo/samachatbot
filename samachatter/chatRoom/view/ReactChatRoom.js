import React from "react";

import "./SimpleChatRoom.css";

import MessageView from "../message/view/ReactChip";
import addMessage from "../message/add/ReduxAction";

import { connect } from "react-redux";

class ChatRoomView extends React.Component {
  sendMessage = e => {
    e.preventDefault();
    let message = {
      id: "user",
      content: document.getElementById("message").value
    };
    this.props.addMessage(message);
    document.getElementById("message").value = "";
  };
  render() {
    return (
      <div className="chat-room">
        <div className="messages container row section ">
          {this.props.messages &&
            this.props.messages.map((message, index) => {
              return (
                <div
                  className={
                    "message col" +
                    (message.id === "user" ? " l12" : " l6 offset-l6")
                  }
                >
                  <MessageView
                    text={message.content}
                    image={message.image}
                    className="offset-s3"
                    key={message.id}
                  />
                </div>
              );
            })}
        </div>
        <div className="message-input col l12 input-field">
          <form onSubmit={this.sendMessage}>
            <input type="text" placeholder="Say something" id="message" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMessage: message => dispatch(addMessage(message))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatRoomView);
