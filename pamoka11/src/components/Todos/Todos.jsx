import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => setTodos(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <div>
              <input type="checkbox" checked={todo.completed} />
              <h3>{todo.title}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
