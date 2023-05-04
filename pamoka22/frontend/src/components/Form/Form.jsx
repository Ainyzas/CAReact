import React from 'react';

export default function Form({ action, email, setEmail, password, setPassword }) {
  return (
    <form onSubmit={action}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
      <button type="submit">Submit</button>
    </form>
  );
}
