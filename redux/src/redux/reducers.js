import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from '../redux/actionTypes'
const defaultState = {
    inputValue: '123',
    list: [1,2,3]
}

export default (state=defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        if (newState.inputValue) {
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            return newState
        } else {
            alert('待做事项不可为空')
        }
    }
    if (action.type === DEL_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}
