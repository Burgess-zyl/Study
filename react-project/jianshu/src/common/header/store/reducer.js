import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
const defaultState = fromJS({
    focused: false,
    hotSearch: []
})

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused', true)
        case actionTypes.SEARCH_BLUR:
            return state.set('focused', false)
        case actionTypes.GET_HOT_SEARCH:
            return state.set('hotSearch', action.data)
        default:
            return state
    }
}