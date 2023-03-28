import React, { useState } from 'react';
import { signUpRequest } from '../../../api-calls/auth';
import { useNavigate, Link } from 'react-router-dom';
import style from './RegistrationLayout.module.css';

export default function RegistrationLayout() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(null);

  const navigate = useNavigate();

  function registrationUpdateHeading() {
    if (isRegistrationSuccessful === false) {
      return <h1>Registration Failed</h1>;
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

    const signupResponse = await signUpRequest(body);

    if (signupResponse) {
      setFirstName('');
      setLastName('');
      setEmail('');
      setDateOfBirth('');
      setPassword('');
      navigate('/auth/signin');
    }

    setIsRegistrationSuccessful(signupResponse);
  }
  return (
    <form className={style.registration} onSubmit={submitHandler}>
      <legend className={style.title}>PLEASE REGISTER YOUR ACCOUNT</legend>
      <section className={style.name}>
        <label className={style.inputContainer}>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <br />
          First Name
        </label>
        <label className={style.inputContainer}>
          <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <br />
          Last Name
        </label>
      </section>

      <label className={style.inputContainer}>
        <span>Email</span>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>

      <label className={style.inputContainer}>
        <span>Password</span>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>

      <label className={style.inputContainer}>
        <span>Date Of Birth</span>
        <input type="date" id="dateOfBirth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
      </label>

      <button className={style.registerButton} type="submit">
        Register
      </button>
      <Link className={style.link} to="/auth/signin">
        Sign In
      </Link>
      {registrationUpdateHeading()}
    </form>
  );
}
