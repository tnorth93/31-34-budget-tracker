const defaultState = {};

export default (state = defaultState, { type, payload }) => {
  let updatedState = null;
  let categoryId = null;
  let categoryExpenses = null;
  let updatedExpenses = null;

  switch (type) {
    case 'CATEGORY_CREATE':
      return { ...state, [payload.id]: [] };
    case 'CATEGORY_REMOVE':
      updatedState = { ...state };
      delete updatedState[payload.id];
      return updatedState;
    case 'EXPENSE_CREATE':
      categoryId = payload.categoryId; //eslint-disable-line
      categoryExpenses = state[categoryId];
      updatedExpenses = [...categoryExpenses, payload];
      return { ...state, [categoryId]: updatedExpenses };
    case 'EXPENSE_REMOVE':
      categoryId = payload.categoryId; //eslint-disable-line
      categoryExpenses = state[categoryId];
      updatedExpenses = categoryExpenses.map((currentExpense) => {
        return currentExpense.id === payload.id ? payload : currentExpense;
      });
      return { ...state, [categoryId]: updatedExpenses };
    default:
      return state;
  }
};