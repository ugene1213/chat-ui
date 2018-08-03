import React from 'react';
import './Message.css';

const Message = ({ messageObj, mine, userName }) => {

  const messageClasses = ['Message'];

  mine ? messageClasses.push('Mine') : messageClasses.push('Theirs');

  return (
    <div className={messageClasses.join(' ')}>

          <div className='MessageSection'>
            <h4 className='MessageName'>{mine ? userName : messageObj.userName }</h4>
            <p>
              {messageObj.text}
            </p>
          </div>

    </div>
  )
}

export default Message;
