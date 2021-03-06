import React, { Component } from 'react';
import './App.css';
import TodoListRedux from 'pages/TodoListRedux'
import TodoListReduxThunk from 'pages/TodoListReduxThunk'
import TodoListReduxSaga from 'pages/TodoListReduxSaga'
import TodoListReactRedux from 'pages/ReactRedux'
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
        <h4>React-redux TodoList</h4>
        <TodoListReactRedux />
      </div>
    );
  }
}

export default App;
