/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({ todos, handleToggle, handleDelete }) => {
  console.log(todos);
  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            index={index}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
