export const create = ({ content, categoryId }) => {
  return {
    type: 'EXPENSE_CREATE',
    payload: {
      content,
      categoryId,
      id: Math.random(),
      timestamp: new Date(),
    },
  };
};

export const update = (expense) => {
  return {
    type: 'EXPENSE_UPDATE',
    payload: expense,
  };
};

export const destroy = (expense) => {
  return {
    type: 'EXPENSE_DESTROY',
    payload: expense,
  };
};

