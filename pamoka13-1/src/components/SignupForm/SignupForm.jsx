import React from 'react';

export default function SignupForm() {
  return (
    <form>
      <label>
        Name: <input type="name" id="name" />
      </label>
      <br />
      <label>
        Email: <input type="email" id="email" />
      </label>
      <br />
      <label>
        Password: <input type="password" id="password" />
      </label>
      <br />
      <button type="button">Sign Up</button>
    </form>
  );
}
