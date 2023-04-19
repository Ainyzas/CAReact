import React, { useEffect } from 'react';
import useFormInput from '../../hooks/useFormInput';
import useTimer from '../../hooks/useTimer';

export default function Form() {
  const name = useFormInput('');
  const email = useFormInput('');
  const timer = useTimer(10);

  function submitHandler(e) {
    e.preventDefault();
    console.log(name.value);
    console.log(email.value);
  }

  useEffect(() => {
    timer.start();

    return () => {
      timer.pause();
    };
  }, []);

  return (
    <form onSubmit={submitHandler}>
      <p>Time before sale ends {timer.time}</p>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" {...name} /> <br />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" {...email} /> <br />
      <button type="submit">Submit</button>
    </form>
  );
}
