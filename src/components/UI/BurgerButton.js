import React from 'react';
import './BurgerButton.css';

const BurgerButton = ({ clicked }) => {
  return (
    <div className="MenuBurger" onClick={clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default BurgerButton;
