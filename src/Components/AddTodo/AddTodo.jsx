/* eslint-disable react/prop-types */
import React from 'react';
import hour from '../../helpers/getHour';
import useForm from '../../hooks/useForm';
import './AddTodo.css';

const AddTodo = ({ dispatch, count }) => {
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
        time: hour(),
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
  const handleKeyPress = (e) => {
    if (e && e.keyCode === 13) {
      document.querySelector('.todo-form').submit();
    }
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
            onKeyPress={handleKeyPress}
          />
          <div className="buttons">
            <span className="buttons todo-count">
              {`${count} items left`}
            </span>
            <button className="btn btn-add" type="submit">
              Add
            </button>
            <button
              className="btn btn-clear"
              type="button"
              onClick={handleClear}
            >
              Clear Completed
            </button>
          </div>
        </label>
      </form>
    </>
  );
};

export default AddTodo;
