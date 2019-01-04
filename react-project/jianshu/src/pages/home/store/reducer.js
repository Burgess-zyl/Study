import { fromJS } from 'immutable'
import { actionTypes } from './index'

const defaultState = fromJS({
    list: [],
    recommendList: [],
    writerList: [],
    carouselList: []
})

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_ARTICLE_LIST:
            return state.set('list', action.data);
        case actionTypes.GET_RECOMMEND_LIST:
            return state.set('recommendList', action.data);
        case actionTypes.GET_WRITER_LIST:
            return state.set('writerList', action.data);
        case actionTypes.GET_CAROUSEL_LIST:
            return state.set('carouselList', action.data)
        default:
            return state;
    }
}