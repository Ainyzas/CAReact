import React, { useContext } from 'react';
import { TimeContext } from '../../App';

export default function Display() {
  const { time } = useContext(TimeContext);
  return <h1>{time}</h1>;
}
