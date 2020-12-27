/* eslint-disable no-case-declarations */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'delete':
      return state.filter((todo) => todo.id !== action.payload.id);
    // case 'update':
    //   return state.map((todo) => {
    //     if (todo.id === action.payload) {
    //       return {
    //         ...todo,
    //         done: !todo.done,
    //       };
    //     }
    //     return todo;
    //   });
    case 'update':
      return state.map((todo) => ((todo.id === action.payload) ? {
        ...todo, done: !todo.done,
      } : { ...todo }));
    case 'clear':
      return state.filter((todo) => todo.done !== true);
    default:
      return state;
  }
};
export default todoReducer;
// en el reducer, colocamos los casos de uso
