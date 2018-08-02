import React, { Component } from 'react';
import './ChatArea.css';
import MessageArea from './MessageArea/MessageArea';
import ChatBox from './ChatBox/ChatBox';

class ChatArea extends Component {

  state = {
    message: ''
  }

  sendMessage = () => {
    //send message
  }

  messageHandler = (e) => {
    this.setState({
      message: e.target.value
    });
  }

  keyPressedHandler =  (e) => {

    if (e.key === 'Enter') {
      //send the message
      this.sendMessage();
    }
  }

  render () {
    return (
      <div className="ChatArea">
        <MessageArea />
        <ChatBox
          message={this.state.message}
          messageChanged={this.messageHandler}
          keyPressed={this.keyPressedHandler}
          send={this.sendMessage}
          />
      </div>
    )
  }
}

export default ChatArea;
