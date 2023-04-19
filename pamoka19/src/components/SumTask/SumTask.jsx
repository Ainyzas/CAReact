import React from 'react';
import useSumOfNumbersInArray from '../../hooks/useSumOfNumbersInArray';

export default function SumTask() {
  const data = [1, 5, 6, 'hello', { foo: 'bar' }, [1, {}, 'hello'], true, false];
  const sum = useSumOfNumbersInArray(data);
  return <div>{sum}</div>;
}
