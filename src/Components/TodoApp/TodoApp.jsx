import React, { useReducer } from 'react';
import todoReducer from './TodoReducer';

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Aprender React',
    done: false,
    date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
    // eslint-disable-next-line new-cap
    time: `${new Date().getHours()}:${(new Date().getMinutes().length === 1
      ? `0${new Date().getMinutes()}`
      : new Date().getMinutes())}:${new Date().getSeconds()}`,
  },
];
const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    const action = {
      type: 'add',
      payload: {
        id: new Date().getTime(),
        description: document.querySelector('#todoInput').value,
        done: false,
        date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
        // eslint-disable-next-line new-cap
        time: `${new Date().getHours()}:${(new Date().getMinutes().length === 1
          ? `0${new Date().getMinutes()}`
          : new Date().getMinutes())}:${new Date().getSeconds()}`,
      },
    };
    console.log(action);
    dispatch(action);
  };
  console.log(todos);
  return (
    <div>
      <h1>
        TodoApp (
        {todos.length}
        {' '}
        )
      </h1>
      <div>
        <div>
          Todos
          <ul>
            {todos.map((todo, index) => (
              <li key={todo.id}>
                {index + 1}
                {' - '}
                {todo.description}
                {' - '}
                {todo.time}
                <button type="button">x</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          Agregar
          <form name="todos" onSubmit={handleSubmit}>
            <label htmlFor="todos">
              <input
                id="todoInput"
                type="text"
                name="description"
                placeholder="Insert todo"
                autoComplete="off"
              />
              <button type="submit">add</button>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};
export default TodoApp;
