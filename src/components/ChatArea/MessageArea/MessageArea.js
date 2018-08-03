import React from 'react';
import './MessageArea.css';
import Message from './Message/Message';

//area for displaying the messages
const messageArea = ({ messages, userId, userName }) => {


  return (
    <div className="MessageArea">
      {//implement messages later
        messages.map((messageObj, idx) => {

          // determines if the message is mine or someone else's
          const isMine = messageObj.userId === userId;
          return (<Message
            key={idx}
            messageObj={messageObj}
            mine={isMine}
            userName={userName} />
        );
        })
      }
    </div>

  )
}

export default messageArea;
