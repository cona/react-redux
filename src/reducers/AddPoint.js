const initialState = {
  todoList: []
}

export const addPointReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // 新しく追加するTODO
      const todo = action.payload.todo;
      // stateを複製して追加
      const newState = Object.assign({}, state);
      newState.todoList.push({
        todo,
        id:action.id,
        completed: false
      });
      return newState;
    default:
      return state;
  }
};