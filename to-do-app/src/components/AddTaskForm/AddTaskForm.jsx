import React, { useState } from 'react';

export default function AddTaskForm({ handleAdd }) {
  const [text, setText] = useState('');

  function handleChange(e) {
    const value = e.target.value;
    setText(value);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (text.trim().length !== 0) {
      handleAdd(text);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" onChange={handleChange} />
      <button type="submit">Add Task</button>
    </form>
  );
}
