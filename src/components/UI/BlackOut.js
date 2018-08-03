import React from 'react';
import './BlackOut.css';


//close this overlay when clicked
const BlackOut = ({ close, isOpen }) => {
  const classes = ['BlackOut'];

  if (isOpen) {
    classes.push('active')
  }

  return (
    <div className={classes.join(' ')}
      onClick={close}></div>
  )
}

export default BlackOut;
