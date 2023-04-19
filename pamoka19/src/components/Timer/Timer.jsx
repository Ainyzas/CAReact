import React from 'react';
import useTimer from '../../hooks/useTimer';

export default function Timer() {
  const timer = useTimer(5);
  return (
    <div>
      <p>{timer.time}</p>
      <button onClick={timer.start}>Start</button>
      <button onClick={timer.pause}>Pause</button>
      <button onClick={timer.reset}>Reset</button>
    </div>
  );
}
