import React, { Component } from 'react'
import store from 'store/index'
import TodoListUI from './TodoListUI'
import axios from 'axios'
import { getInputChangeAction, getAddTodoItemAction, getDelTodoItemAction } from 'store/actionCreator'
class TodoList extends Component {
    constructor (props) {
        super(props)
        this.state = store.getState()
        this.handleChange = this.handleChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleDelItem = this.handleDelItem.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleChange={this.handleChange}
                handleBtnClick={this.handleBtnClick}
                handleDelItem={this.handleDelItem}
            />
        )
    }
    componentDidMount () {
        axios.get('./list.json').then(resp => {
            
        })
    }
    handleStoreChange () {
        this.setState(store.getState())
    }
    handleChange (e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleBtnClick () {
        const action = getAddTodoItemAction()
        store.dispatch(action)
    }
    handleDelItem (index) {
        const action = getDelTodoItemAction(index)
        store.dispatch(action)
    }
}

export default TodoList