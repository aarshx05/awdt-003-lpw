import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddTodo = () => {
    if (taskName.trim() === '' || taskDescription.trim() === '') return;
    const newItem = { name: taskName, description: taskDescription, completed: false };
    setTodos([...todos, newItem]);
    setTaskName('');
    setTaskDescription('');
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">LPW_ToDoList</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="todo-input"
        />
        <input
          type="text"
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          className="todo-description"
        />
        <button onClick={handleAddTodo} className="add-button">Add</button>
      </div>
      <TodoList todos={todos} onToggle={handleToggleTodo} />
      {todos.length === 0 && <p className="no-tasks">No tasks yet</p>}
     
    </div>
  );
}

export default App;

