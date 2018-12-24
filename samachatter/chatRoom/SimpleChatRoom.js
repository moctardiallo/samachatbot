import React from "react";

import "./SimpleChatRoom.css";

import Message from "../message/SimpleMessage";
import addMessage from "./addMessage/SimpleActionAddMessage";

import { connect } from "react-redux";

class ChatRoom extends React.Component {
  state = {
    messages: [
      {
        id: "user",
        content: "hello from react"
      }
    ]
  };

  componentDidMount = () => {
    fetch("http://localhost:5000/messages")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          messages: this.state.messages.concat(json.messages)
        });
      });
  };

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
          {this.state.messages &&
            this.state.messages.map((message, index) => {
              return (
                <div
                  className={
                    "message col" +
                    (message.id === "user" ? " l12" : " l6 offset-l6")
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
