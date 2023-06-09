import React, { useState } from 'react';
import { signInRequest } from '../../../api-calls/auth';
import { Link, useNavigate } from 'react-router-dom';

export default function SignInLayout() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isWrongCredential, setIsWrongCredentials] = useState(null);

  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();
    const userId = await signInRequest({ email, password });
    if (userId) {
      localStorage.setItem('loggedInUser', userId);
      navigate('/home');
    } else {
      setIsWrongCredentials(true);
    }
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label htmlFor="password">Password </label>
        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">Log In</button>
        <h3 style={{ display: isWrongCredential ? 'block' : 'none' }}>Wrong password or email</h3>
      </form>
      <p>
        Not Registered? <Link to="/auth/signup">Register Here</Link>
      </p>
    </>
  );
}
