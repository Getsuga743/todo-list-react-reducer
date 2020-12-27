/* eslint-disable react/prop-types */
import React from 'react';
import useForm from '../../hooks/useForm';
import './AddTodo.css';

const AddTodo = ({ dispatch }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }
    const action = {
      type: 'add',
      payload: {
        id: new Date().getTime(),
        description: document.querySelector('#todoInput').value,
        done: false,
        date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
        // eslint-disable-next-line new-cap
        time: `${new Date().getHours()}:${
          new Date().getMinutes().length === 1
            ? `0${new Date().getMinutes()}`
            : new Date().getMinutes()
        }:${new Date().getSeconds()}`,
      },
    };
    dispatch(action);
    reset();
  };
  const handleClear = (e) => {
    e.preventDefault();
    const action = { type: 'clear' };
    dispatch(action);
  };

  return (
    <>
      <form name="todos" className="todo-form" onSubmit={handleSubmit}>
        <label htmlFor="todos" className="todo-label">
          <input
            className="todo-input"
            id="todoInput"
            type="text"
            name="description"
            placeholder="Insert todo"
            autoComplete="off"
            value={description}
            onChange={handleInputChange}
          />
          <div className="buttons">
            <button className="btn btn-add" type="submit">
              add
            </button>
            <button className="btn btn-clear" type="button" onClick={handleClear}>
              clear
            </button>
          </div>
        </label>
      </form>
    </>
  );
};

export default AddTodo;
