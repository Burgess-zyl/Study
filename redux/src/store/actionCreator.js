import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM, INIT_LIST, GET_INIT_LIST } from './actionTypes'
import axios from 'axios'

export const  getInputChangeAction =  (value) => {
    return {
        type: CHANGE_INPUT_VALUE,
        value
    }
}

export const  getAddTodoItemAction = () => {
    return {
        type: ADD_TODO_ITEM
    }
}

export const  getDelTodoItemAction = (index) => {
    return {
        type: DEL_TODO_ITEM,
        index
    }
}

export const initListAction = (data) => ({
    type: INIT_LIST,
    data
})

// thunk 异步代码拆分
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('./list.json').then(resp => {
            const data = resp.data
            const action = initListAction(data)
            dispatch(action)
        })
    }
}

// saga
export const initTodoList = () => ({
    type: GET_INIT_LIST
})