import React from 'react';

export default function Post({ title, body }) {
  return (
    <div>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
}
