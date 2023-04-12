import React from 'react';

export default function TextInput({ style, type, placeholder, updateState, checkIfCorrect }) {
  function inputHandler(e) {
    updateState(e.target.value);
    if (type === 'text') {
      if (e.target.value.length >= 6) checkIfCorrect(true);
      else checkIfCorrect(false);
    } else if (type === 'email') {
      if (e.target.value.includes('@')) checkIfCorrect(true);
      else checkIfCorrect(false);
    }
  }

  return (
    <div>
      <input style={style} onInput={inputHandler} type={type} placeholder={placeholder} />
    </div>
  );
}
