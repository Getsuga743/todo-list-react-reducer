/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import './TodoListItem.css';
import img from '../../images/icon-cross.svg';

const TodoListItem = ({ todo, handleToggle, handleDelete }) => (
  <>
    <li className="list-item-container">
      <span className="span-container">
        <span className={todo.done === true ? 'item-index' : ' item-index border-hidden'}>
          <span className={todo.done === true ? 'item-index-span' : ''}>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="2"
                d="M1 4.304L3.696 7l6-6"
              />
            </svg>
          </span>
        </span>
      </span>
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
            <img src={img} alt="delete item cross" />
          </button>
        </div>
      </div>
    </li>
  </>
);

export default TodoListItem;
