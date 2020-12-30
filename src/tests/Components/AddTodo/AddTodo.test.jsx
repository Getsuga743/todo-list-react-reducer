/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from '../../../Components/AddTodo/AddTodo';
import demoTodos from '../../../fixtures/demoTodos';

describe('Pruebas en <TodoAdd />', () => {
  const dispatch = jest.fn();

  const wrapper = shallow(
    <AddTodo dispatch={dispatch} count={demoTodos.length} />,
  );
  test('debe de coincididir con el snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('No debe de llamar dispatch', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault() {} });
    expect(dispatch).toHaveBeenCalledTimes(0);
  });
  test('debe de llamar a la funcion dispatch', () => {
    const value = 'Aprender React';
    wrapper.find('input').simulate('change', {
      target: {
        value,
        name: 'description',
      },
    });

    // const formSubmit = wrapper
    //   .find('input')
    //   .simulate('keypress', { key: 'Enter' });
    // formSubmit({ preventDefault() {} });
    // expect(dispatch).toHaveBeenCalledWith({
    //   id: expect.any(Number),
    //   desc: value,
    //   done: false,
    // });
  });
});
