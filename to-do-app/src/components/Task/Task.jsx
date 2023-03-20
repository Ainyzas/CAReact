import React, { useState } from 'react';

export default function Task(props) {
  const { text, isFinished, index, handleCheckbox } = props;
  const [checked, setChecked] = useState(isFinished);

  function handleOnChange(event) {
    setChecked(!checked);
    handleCheckbox(index);
  }
  return (
    <div style={{ color: checked ? 'grey' : 'black' }}>
      {text}
      <input type="checkbox" checked={checked} onChange={handleOnChange} />
    </div>
  );
}
