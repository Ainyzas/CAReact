import React, { useState, useEffect } from 'react';

export default function HooksTesting() {
  const [text, setText] = useState('');

  function resizeHandler() {
    console.log('resized', window.innerWidth);
  }

  useEffect(() => {
    console.log('mount');
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      console.log('unmount');
    };
  }, []);

  //   useEffect(() => {
  //     console.log(text);
  //   }, [text]);

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText('Hello')}>Hello</button>
      <button onClick={() => setText('Bye')}>Bye</button>
    </div>
  );
}
