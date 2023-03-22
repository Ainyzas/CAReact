import React, { useRef } from 'react';

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
    inputRef.current.value = 'cool';
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus input</button>
    </>
  );
}
