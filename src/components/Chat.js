import React, { Component } from "react";
import { Launcher } from "react-chat-window";
export default class Chat extends Component {
  constructor() {
    super();
    this.state = {
      messageList: [],
    };
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message],
    });
  }

  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [
          ...this.state.messageList,
          {
            author: "them",
            type: "text",
            data: { text },
          },
        ],
      });
    }
  }

  render() {
    return (
      <div>
        <Launcher
          agentProfile={{
            teamName: "Feedback",
          }}
          onMessageWasSent={this._onMessageWasSent.bind(this)}
          messageList={this.state.messageList}
          showEmoji={false}
        />
      </div>
    );
  }
}
