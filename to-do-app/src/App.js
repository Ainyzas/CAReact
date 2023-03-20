import React, { useState } from 'react';
import './App.css';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    { text: 'First task', isFinished: true },
    { text: 'Second task', isFinished: false },
  ]);

  function handleAddTask(task) {
    const newTasks = JSON.parse(JSON.stringify(tasks));
    newTasks.push({
      text: task,
      isFinished: false,
    });
    setTasks(newTasks);
  }

  function handleCheckbox(index) {
    const newTasks = JSON.parse(JSON.stringify(tasks));
    newTasks[index].isFinished = !newTasks[index].isFinished;

    setTasks(newTasks);
  }

  return (
    <div>
      <Header />
      <TaskList tasks={tasks} handleCheckbox={handleCheckbox} />
      <AddTaskForm handleAdd={handleAddTask} />
    </div>
  );
}

export default App;
