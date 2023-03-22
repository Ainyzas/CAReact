import React, { useContext } from 'react';
import { TimeContext } from '../../App';

export default function Controls() {
  const { setTime, setIsRunning } = useContext(TimeContext);

  function startTimer() {
    setIsRunning(true);
  }

  function pauseTimer() {
    setIsRunning(false);
  }

  function resetTimer() {
    setIsRunning(false);
    setTime(0);
  }

  return (
    <>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  );
}
