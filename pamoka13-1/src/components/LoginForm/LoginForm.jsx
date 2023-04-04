import React from 'react';

export default function SigninForm() {
  return (
    <form>
      <label>
        Email: <input type="email" id="email" />
      </label>
      <br />
      <label>
        Password: <input type="password" id="password" />
      </label>
      <br />
      <button type="button">Log In</button>
    </form>
  );
}
