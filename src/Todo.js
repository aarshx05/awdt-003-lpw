import React from 'react';

function Todo({ name, description, completed, onToggle, index }) {
  return (
    <li
      className={`todo-item ${completed ? 'completed' : ''}`}
      onClick={() => onToggle(index)}
    >
      <div className="todo-text">
        <strong>{name}</strong>
      </div>
      <div className="todo-description">
        {description}
      </div>
    </li>
  );
}

export default Todo;
