import React from 'react';
import '../css/button.css';

export function Button({ text, isClickButton, manageClick }) {
  return (
    <button
      className={isClickButton ? 'click-button' : 'restart-button'}
      onClick={manageClick}
    >
      {text}
    </button>
  );
}
