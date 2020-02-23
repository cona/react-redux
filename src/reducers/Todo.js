const initialState = {
  todoList: []
}

export const todoReducer = (state = initialState, action) => {
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
    case 'TOGGLE_TODO':
      state.todoList = state.todoList.map((todo)=>{
        if(todo.id === action.payload.id) {
          todo.completed = !todo.completed;
          return todo;
        }
        return todo;
      });
      return Object.assign({}, state);
    default:
      return state;
  }
};