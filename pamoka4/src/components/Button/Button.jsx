import React from 'react';

export default function Button(props) {
  const { buttonHandler } = props;
  return <button onClick={() => buttonHandler(true)}>Log In</button>;
}
