/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useReducer, useEffect } from 'react';
import todoReducer from './TodoReducer';
import TodoList from '../Todo-list/TodoList';
import './TodoApp.css';
import AddTodo from '../AddTodo/AddTodo';
import img from '../../images/icon-sun.svg';

const init = () => JSON.parse(localStorage.getItem('todos')) || [];

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    // return () => {
    //   cleanup
    // }
  }, [todos]);
  const handleDelete = (todoID) => {
    const action = {
      type: 'delete',
    };
    action.payload = todos.find((todo) => todo.id === todoID);
    dispatch(action);
  };
  const handleToggle = (todoId) => {
    const action = {
      type: 'update',
    };
    action.payload = todos.find((todo) => todo.id === todoId);
    action.payload.done = !action.payload.done;
    dispatch(action);
  };
  const todosLeft = () => todos.filter((todo) => todo.done !== true).length;
  // const handleAddTodo = (newTodo) => {
  //   const action = {
  //     type: 'update',
  //   };
  //   action.payload = newTodo;
  //   dispatch(action);
  // };

  return (
    <div className="todo">
      <div className="todo-title">
        <span>
          <h1>TODO</h1>
        </span>
        <span>
          <img alt="light-mode" src={img} />
        </span>
      </div>
      <div>
        <div>
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </div>
        <AddTodo dispatch={dispatch} count={todosLeft()} />
      </div>
    </div>
  );
};
export default TodoApp;
