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
    console.log(action.payload);
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
  // const handleAddTodo = (newTodo) => {
  //   const action = {
  //     type: 'update',
  //   };
  //   action.payload = newTodo;
  //   dispatch(action);
  // };

  return (
    <div className="todo">
      <h1 className="todo-title">TODO</h1>
      <div>
        <div>
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </div>
        <AddTodo dispatch={dispatch} />
      </div>
    </div>
  );
};
export default TodoApp;
