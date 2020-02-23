let todoId = 0;
export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    payload: { todo },
    id : todoId++,
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    payload: {id}
  };
};