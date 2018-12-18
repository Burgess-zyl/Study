import { SEARCH_FOCUS, SEARCH_BLUR, GET_HOT_SEARCH, MOUSE_ENTER, MOUSE_LEAVE, SWITCH_INFO, TOTOP_STATE } from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

const getHotSearch = (data) => ({
    type: GET_HOT_SEARCH,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
    type: SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: SEARCH_BLUR
})

export const mouseEnter = () => ({
    type: MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: MOUSE_LEAVE
})

export const toTopState = (data) => ({
    type: TOTOP_STATE,
    data
})

export const switchSearchInfo = (data) => ({
    type: SWITCH_INFO,
    data
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