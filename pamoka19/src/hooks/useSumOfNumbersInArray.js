import { useState, useEffect } from 'react';

export default function useSumOfNumbersInArray(array) {
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const filtered = array.filter((item) => typeof item === 'number');
    const totalSum = filtered.reduce((a, b) => a + b, 0);
    setSum(totalSum);
  }, [array]);

  return sum;
}
