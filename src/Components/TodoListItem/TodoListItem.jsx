/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({
  todo, index, handleToggle, handleDelete,
}) => (
  <>
    <li className="list-item-container">
      <span className="item-index">{index + 1}</span>
      <div className="list-item-content">
        <p
          // se puede implementar con un template literal y un && ${todo.done && 'complete'}
          className={todo.done === false ? '' : 'done'}
          onClick={() => {
            handleToggle(todo.id);
          }}
        >
          {todo.description}
        </p>
        <div className="list-item-btn">
          <span className="time">{todo.time}</span>

          <button
            className="btn btn-item"
            onClick={() => {
              handleDelete(todo.id);
            }}
            type="button"
          >
            x
          </button>
        </div>
      </div>
    </li>
  </>
);

export default TodoListItem;
