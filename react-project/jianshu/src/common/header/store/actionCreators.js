import { SEARCH_FOCUS, SEARCH_BLUR, GET_HOT_SEARCH } from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'
export const searchFocus = () => ({
    type: SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: SEARCH_BLUR
})

const getHotSearch = (data) => ({
    type: GET_HOT_SEARCH,
    data: fromJS(data)
})

export const getHotSearchList = () => {
    return function (dispatch) {
        axios.get('./api/hot_search.json').then(resp => {
            const data = resp.data.data
            const action = getHotSearch(data)
            dispatch(action)
        })
    }
}