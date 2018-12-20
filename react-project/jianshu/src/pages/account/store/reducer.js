import { actionTypes } from './index'
import { fromJS } from 'immutable'
const defaultStatus = fromJS({
    loginState: false,
    accountState: false
})

export default (state=defaultStatus, action) => {
    switch (action.type) {
        case actionTypes.ACCOUNT_STATE:
            return state.set('accountState', action.data)
        case actionTypes.LOGIN_STATE:
            return state.set('loginState', action.data)
        default:
            return state
    }
}