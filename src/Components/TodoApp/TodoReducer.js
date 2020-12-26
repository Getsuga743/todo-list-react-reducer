/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return state = [...state, action.payload];
    default:
      return state;
  }
};
export default todoReducer;
