/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow } from 'enzyme';
import todoReducer from '../../../Components/TodoApp/TodoReducer';
import demoTodos from '../../../fixtures/demoTodos';
import '../../../setupTests';

describe('Pruebas en todoReducer', () => {
  test('debe de retornar el estado por defecto', () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });
  test('debe de agregar un todo', () => {
    const action = {
      type: 'add',
      payload: {
        id: 3,
        description: 'zarasear',
        done: false,
      },
    };
    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, action.payload]);
  });
  test('debe de eliminar un todo', () => {
    let action = {
      type: 'add',
      payload: {
        id: 3,
        description: 'zarasear',
        done: false,
      },
    };
    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(3);
    action = {
      type: 'delete',
      payload: {
        id: 3,
      },
    };
    const finalState = todoReducer(demoTodos, action);
    expect(finalState.length).toBe(2);
    expect(finalState).toEqual(demoTodos);
  });
  test('debe de actualizar el estado de un todo', () => {
    let state = todoReducer(demoTodos, {});
    const action = {
      type: 'update',
      payload: {
        id: 2,
      },
    };
    state = todoReducer(demoTodos, action);
  });
  test('debe de limpiar los todo completados', () => {});
});
