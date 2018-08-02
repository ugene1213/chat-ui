import React, { Component } from 'react';
import './ChatBox.css';


//This is the chatting area container
const ChatBox = (props) => {
    return (
      <div className="ChatBox">
        <input
          value={props.message}
          onChange={props.messageChanged}
          onKeyPress={props.keyPressed}
          placeholder="Type your message here (Press 'ENTER' or click 'SEND' to send message)"
          ></input>

        <button onClick={props.sendMessage}>SEND</button>
      </div>
    );
}

export default ChatBox;
