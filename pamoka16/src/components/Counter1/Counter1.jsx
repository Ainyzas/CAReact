import React from 'react';

export default function Counter1({ counter, incrementCounter }) {
  return (
    <div>
      <button style={{ backgroundColor: 'red' }} onClick={incrementCounter}>
        {counter}
      </button>
    </div>
  );
}
