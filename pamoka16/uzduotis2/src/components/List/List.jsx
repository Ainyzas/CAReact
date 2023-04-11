import React from 'react';

export default function List({ isVisible, toggle, people = [] }) {
  return (
    <div>
      <button onClick={toggle}>Toggle List</button>
      <ul style={{ display: isVisible ? 'block' : 'none' }}>
        {people.map((person) => {
          return <li key={person.id}>{person.name}</li>;
        })}
      </ul>
    </div>
  );
}
