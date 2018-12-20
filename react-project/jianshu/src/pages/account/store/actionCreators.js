import { ACCOUNT_STATE, LOGIN_STATE } from './actionTypes'
import axios from 'axios'

const changeLoginState = (data) => ({
    type: LOGIN_STATE,
    data
})

export const changeAccountState = (data) => ({
    type: ACCOUNT_STATE,
    data
})

export const login = (account, password) => {
    return (dispatch) => {
        axios.get(`/api/login.json?account=${account}&password=${password}`).then(
            (resp) => {
                const data = resp.data.data
                if (data) {
                    const action = changeLoginState(true)
                    dispatch(action)
                }
                console.log(resp)
            }
        )
    }
}