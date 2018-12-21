import React from "react";

import "./SimpleChatRoom.css";

import Message from "../message/SimpleMessage";
import addMessage from "./addMessage/SimpleActionAddMessage";

import { connect } from "react-redux";

class ChatRoom extends React.Component {
  sendMessage = e => {
    e.preventDefault();
    this.props.addMessage(document.getElementById("message").value);
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
                    "message col" + (index % 2 ? " l12" : " l6 offset-l6")
                  }
                >
                  <Message
                    message={message.content}
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
)(ChatRoom);
