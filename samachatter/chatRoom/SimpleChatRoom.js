import React from "react";

import Message from "../message/SimpleMessage";

import { connect } from "react-redux";

class ChatRoom extends React.Component {
  sendMessage = e => {
    e.preventDefault();
    console.log(document.getElementById("message").value);
    document.getElementById("message").value = "";
  };
  render() {
    return (
      <div className="row section">
        {this.props.messages &&
          this.props.messages.map((message, index) => {
            return (
              <div className={"col" + (index % 2 ? " l12" : " l6 offset-l6")}>
                <Message
                  message={message.content}
                  className="offset-s3"
                  key={message.id}
                />
              </div>
            );
          })}
        <div className="col l12 input-field">
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

export default connect(mapStateToProps)(ChatRoom);
