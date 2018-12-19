import * as actionCreators from './actionTypes'
import { fromJS } from 'immutable'
const defaultState = fromJS({
    base: {
        author: '',
        meta: []
    },
    article: {
        title: '',
        content: ''
    }
})

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionCreators.GET_ARTICLE_DETAILS:
            console.log(action.data)
            const data = action.data.toJS()
            console.log(data)
            return state.merge({
                base: data.base,
                article: data.article
            })
            // return state.set('base', data.base)
        default:
            return state

    }
}