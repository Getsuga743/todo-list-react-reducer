/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from '@testing-library/react';
import TodoApp from '../../../Components/TodoApp/TodoApp';
import demoTodos from '../../../fixtures/demoTodos';

describe('pruebas en TodoApp', () => {
  const wrapper = shallow(<TodoApp />);
  Storage.prototype.setItem = jest.fn();
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de agregar un Todo', () => {
    const wrapper = mount(<TodoApp />);
    act(() => {
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
    });
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    expect(localStorage.setItem).toHaveBeenCalledWith({});
  });
});
