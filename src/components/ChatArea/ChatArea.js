import React, { Component } from 'react';
import './ChatArea.css';
import io from "socket.io-client";
import MessageArea from './MessageArea/MessageArea';
import ChatBox from './ChatBox/ChatBox';
import { connect } from 'react-redux';

class ChatArea extends Component {

  state = {
    messages: [],
    message: '',
    socket: null,
    isTypingMessage: '',
  }

  componentDidMount() {
    this.initiateConnection();
  }

  //initiates connection from socket to server
  initiateConnection = () => {

    //connecting to Socket.IO chat server
    const socket = io("https://spotim-demo-chat-server.herokuapp.com");

    socket.on("connect", () => {
      console.log("connected to chat server!");

      //have the socket start listenning for chat events once socket has been set in the state
      //if event receives obj with 'isTyping' key notify user other person typing
      //delay resetting the 'typing' state to blank so that it can be seen on ui
      this.setState({
        socket: socket
      }, () => {
        this.state.socket.on("spotim/chat", (resp) => {

          if (resp.isTyping && resp.userId !== this.props.userId) {
            const typingMessage = `${resp.userName} is Typing`;

            this.setState({ isTypingMessage: typingMessage }, () => {
              setTimeout(() => this.setState({ isTypingMessage: ''}),
                2000);
              });
          }
          else if (!resp.isTyping) {
            const newMessages = this.state.messages.concat(resp)
            this.setState({
              messages: newMessages
            });
          }
        });
      })
    });

    socket.on("disconnect", () => {
      console.log("disconnected from chat server!");
      this.setState({
        socket: null
      });
    });
  }

  //emit message and save in array, using userId to differentiate
  //your own messages and someone else's
  sendMessage = () => {
    // this.state.socket.emit
    if (this.state.message !== '') {

      const message = {
        text: this.state.message,
        userName: this.props.userName,
        avatar: 'some pic',
        userId: this.props.userId
      }

      //clear input on send
      this.setState({ message: '' });
      this.state.socket.emit("spotim/chat", message);
    }
  }


  //emit an isTyping value to late others know you are typing
  messageHandler = (e) => {
    this.setState({
      message: e.target.value
    });
    this.state.socket.emit('spotim/chat', {
      isTyping: true,
      userName: this.props.userName,
      userId: this.props.userId
    })
  }

  keyPressedHandler =  (e) => {

    if (e.key === 'Enter') {
      this.sendMessage();
    }
  }

  render () {
    return (
      <div className="ChatArea">
        <MessageArea messages={this.state.messages} userId={this.props.userId} userName={this.props.userName} />
        <ChatBox
          message={this.state.message}
          messageChanged={this.messageHandler}
          keyPressed={this.keyPressedHandler}
          send={this.sendMessage}
          isTypingMessage={this.state.isTypingMessage}
          />
      </div>
    )
  }
}

const mapStateToProps = ({ userName, userId }) => {
  return {
    userName,
    userId
  }
}

export default connect(mapStateToProps)(ChatArea);
