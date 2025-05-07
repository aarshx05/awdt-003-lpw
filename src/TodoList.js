    import React from 'react';
    import Todo from './Todo';

    function TodoList({ todos, onToggle }) {
    return (
        <ul className="todo-list">
        {todos.length === 0 ? (
            <p className="no-tasks">No tasks yet</p>
        ) : (
            todos.map((todo, index) => (
            <Todo
                key={index}
                index={index}
                name={todo.name}
                description={todo.description}
                completed={todo.completed}
                onToggle={onToggle}
            />
            ))
        )}
        </ul>
    );
    }

    export default TodoList;


