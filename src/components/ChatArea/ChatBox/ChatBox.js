import React, { Component } from 'react';
import './ChatBox.css';
import Aux from '../../../utils/Aux';


const ChatBox = (props) => {
    return (
      <Aux>
        <div className="TypingMessage">{props.isTypingMessage}</div>
        <div className="ChatBox">
          <input
            value={props.message}
            onChange={props.messageChanged}
            onKeyPress={props.keyPressed}
            placeholder="Type your message here (Press 'ENTER' or click 'SEND' to send message)"
            ></input>

          <button onClick={props.send}>SEND</button>
        </div>
      </Aux>
    );
}

export default ChatBox;
