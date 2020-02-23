import React from 'react';

export default class Todo extends React.Component {
  state = {
    todo: ''
  };

  render() {
    console.log(this.props);

    // StoreのTodoからリストを生成
    const list = this.props.todo.todoList.map((todoObject, index) => <li
      onClick={() => this.props.toggleTodo(index)}
      key={index} className={todoObject.completed ? 'todo-completed' : ''}>{todoObject.todo}</li>)

    return (
      <div>
        <input type="text"
               onChange={elm => this.setState({ todo: elm.target.value })} />
        <button onClick={() => this.props.addTodo(this.state.todo)}>追加</button><br />
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}