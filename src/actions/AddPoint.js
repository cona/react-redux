export const changeLens = (lens) => {
  return {
    type: 'ADD_LENS',
    payload: { lens },
  };
};
