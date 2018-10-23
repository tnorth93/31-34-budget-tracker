export const create = ({ title }) => {
  return {
    type: 'CATEGORY_CREATE',
    payload: {
      id: Math.random(),
      title,
      createdOn: new Date(),
    },
  };
};

export const update = (category) => {
  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  };
};

export const destroy = (category) => {
  return {
    type: 'CATEGORY_DESTROY',
    payload: category,
  };
};