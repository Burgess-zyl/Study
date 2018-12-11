import React, { Component } from 'react';
import './App.css';
import TodoListRedux from 'pages/TodoListRedux'
import TodoListReduxThunk from 'pages/TodoListReduxThunk'
import TodoListReduxSaga from 'pages/TodoListReduxSaga'
import 'antd/dist/antd.css'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Redux TodoList</h3>
        <TodoListRedux />
        <h3>Redux-thunk TodoList</h3>
        <TodoListReduxThunk />
        <h3>Redux-saga TodoList</h3>
        <TodoListReduxSaga />
      </div>
    );
  }
}

export default App;
