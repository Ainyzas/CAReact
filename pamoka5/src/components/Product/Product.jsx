import React from 'react';

export default function Product(props) {
  const { text, index, handleDelete } = props;

  function handleClick(event) {
    handleDelete(index);
  }

  return (
    <div>
      <p>{text}</p>
      <button type="button" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}
