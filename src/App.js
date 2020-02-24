import React, { Component } from 'react';
import './App.css';
//import Todo from './components/Todo';
import Todo from './containers/Todo';
import GetPostList from './containers/Api'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
        <hr />
        <GetPostList />
      </div>
    );
  }
}

export default App;