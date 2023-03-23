import React from 'react';

export default function User({ name, email, company }) {
  return (
    <li>
      <h2>{name}</h2>
      <h3>Email: {email}</h3>
      <h3>Company: {company}</h3>
    </li>
  );
}
