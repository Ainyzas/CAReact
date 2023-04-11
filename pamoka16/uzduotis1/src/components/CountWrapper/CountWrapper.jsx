import React, { useState } from 'react';

export default function CountWrapper({ render }) {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter((prev) => prev + 1);
  }

  return <div>{render(counter, incrementCounter)}</div>;
}
