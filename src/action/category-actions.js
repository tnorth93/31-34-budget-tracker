export const create = ({ title, budget }) => {
  return {
    type: 'CATEGORY_CREATE',
    payload: {
      id: Math.random(),
      title,
      budget,
      createdOn: new Date(),
    },
  };
};

export const update = (category) => {
  return {
    type: 'CATEGORY_UPDATE',
    payload: category,
  };
};

export const destroy = (category) => {
  return {
    type: 'CATEGORY_DESTROY',
    payload: category,
  };
};