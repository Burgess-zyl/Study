import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from '../redux/actionTypes'

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