import React, { useState } from 'react';
import { signUpRequest } from '../../../api-calls/auth';

export default function RegistrationLayout() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(null);

  function registrationUpdateHeading() {
    if (isRegistrationSuccessful === true) {
      return <h1>Registration Successful</h1>;
    } else if (isRegistrationSuccessful === false) {
      return <h1>Registration failed</h1>;
    }
  }

  async function submitHandler(e) {
    e.preventDefault();
    const body = {
      firstName,
      lastName,
      email,
      password,
      dateOfBirth,
    };

    setIsRegistrationSuccessful(await signUpRequest(body));
  }
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" onChange={(e) => setFirstName(e.target.value)} />
      <br />
      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" onChange={(e) => setLastName(e.target.value)} />
      <br />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <label htmlFor="dateOfBirth">Date Of Birth</label>
      <input type="date" id="dateOfBirth" onChange={(e) => setDateOfBirth(e.target.value)} />
      <br />
      <button type="submit">Register</button>
      {registrationUpdateHeading()}
    </form>
  );
}
