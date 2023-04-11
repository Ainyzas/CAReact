import React from 'react';

export default function Counter2({ counter, incrementCounter }) {
  return (
    <div>
      <button style={{ backgroundColor: 'yellow' }} onClick={incrementCounter}>
        {counter}
      </button>
    </div>
  );
}
