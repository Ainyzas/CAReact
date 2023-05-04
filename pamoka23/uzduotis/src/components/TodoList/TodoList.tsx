import React, { useState } from 'react';
import Todo from '../Todo/Todo';

export default function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  function inputHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    setInputValue(e.target.value);
  }

  function addTodo(): void {
    if (inputValue) {
      setTodos((prev) => [...prev, inputValue]);
      setInputValue('');
    }
  }

  function deleteHandler(index: number): void {
    setTodos((prev) => prev.filter((value, i) => index !== i));
  }

  return (
    <div>
      <label>
        <span>Todo: </span>
        <input type="text" value={inputValue} onChange={inputHandler} />
      </label>
      <button onClick={addTodo}>Add</button>
      <br />
      {todos.map((todo, index) => {
        return <Todo key={index} text={todo} onDelete={() => deleteHandler(index)} />;
      })}
    </div>
  );
}
