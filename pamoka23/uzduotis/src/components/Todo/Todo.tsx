import React, { useState } from 'react';

type TodoProps = {
  text: string;
  onDelete: () => void;
};

export default function Todo({ text, onDelete }: TodoProps) {
  const [completed, setCompleted] = useState<boolean>(false);

  function handleChange() {
    setCompleted((prev) => !prev);
  }

  return (
    <div>
      <br />
      <input type="checkbox" checked={completed} onChange={handleChange} />
      <span style={{ textDecoration: completed ? 'line-through' : '' }}>{text}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
