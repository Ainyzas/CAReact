import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Page404() {
  const [time, setTime] = useState(5);
  const timeRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    timeRef.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timeRef.current);
    };
  }, []);

  useEffect(() => {
    if (time === 0) {
      navigate('/home');
    }
  }, [time]);

  return (
    <h3>
      Sorry this page does not exsist <br />
      Redirecting to Main page in {time} seconds...
    </h3>
  );
}
