import React, { Component } from 'react';
import './App.css';
//import Todo from './components/Todo';
import Todo from './containers/Todo';
import GetPostList from './containers/Api'
import Form from './containers/Form'
import showResults from './showResult';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
        <hr />
        <GetPostList />
        <hr />
        <Form onSubmit={showResults}/>
      </div>
    );
  }
}

export default App;