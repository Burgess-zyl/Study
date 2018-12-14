import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
const defaultState = fromJS({
    focused: false,
    mouseState: false,
    page: 1,
    totalPage: 1,
    hotSearch: []
})

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused', true)
        case actionTypes.SEARCH_BLUR:
            return state.set('focused', false)
        case actionTypes.GET_HOT_SEARCH:
            return state.set('hotSearch', action.data).set('totalPage', action.totalPage)
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseState', true)
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseState', false)
        case actionTypes.SWITCH_INFO:
            return state.set('page', action.data)
        default:
            return state
    }
}