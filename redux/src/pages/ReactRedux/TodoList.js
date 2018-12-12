import React, { Component } from 'react'
import TodoListUI from 'components/TodoListUI'
import axios from 'axios'
import { getInputChangeAction, getAddTodoItemAction, 
    getDelTodoItemAction, initListAction } from 'store/actionCreator'
import { connect } from 'react-redux'

class TodoList extends Component {
    render() {
        const { inputValue, list, handleChange, handleBtnClick, handleDelItem } = this.props
        return (
            <TodoListUI
                inputValue={inputValue}
                list={list}
                handleChange={handleChange}
                handleBtnClick={handleBtnClick}
                handleDelItem={handleDelItem}
            />
        )
    }
    componentDidMount () {
        this.props.initList()
    }
}

// store 挂载到组件props
const mapStateToProps = (state) => {
    return state
}
// store.dispatch 挂摘到props
const mapDispatchToProps = (dispatch) => {
    return {
        handleChange (e) {
            const action = getInputChangeAction(e.target.value)
            dispatch(action)
        },
        handleBtnClick () {
            const action = getAddTodoItemAction()
            dispatch(action)
        },
        handleDelItem (index) {
            const action = getDelTodoItemAction(index)
            dispatch(action)
        },
        initList () {
            axios.get('./list.json').then(resp => {
                const data = resp.data
                const action = initListAction(data)
                dispatch(action)
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)