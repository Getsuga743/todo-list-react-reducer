/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import TodoListItem from '../../../Components/TodoListItem/TodoListItem';
import '../../../setupTests';
import demoTodos from '../../../fixtures/demoTodos';

describe('pruebas en <TodoListItem />', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />,
  );
  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de llamar la funcion borrar', () => {
    wrapper.find('button').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });
  test('debe de llamar la funcion toggle', () => {
    wrapper.find('p').simulate('click');
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });
  test('el contenido debe ser correcto', () => {
    wrapper.update();
    const p = wrapper.find('p');
    expect(p.text()).toBe(`${demoTodos[0].description}`);
  });
  test('debe de tener la clase complete si el  todo.done === true', () => {
    const todo = demoTodos[0];
    todo.done = true;
    const wrapper1 = shallow(<TodoListItem todo={todo} />);
    expect(wrapper1.find('p').hasClass('done')).toBe(true);
  });
});
