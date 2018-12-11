import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreator'
import axios from 'axios'
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList)
}

function* getInitList() {
    try {
        const resp = yield axios.get('./list.json')
        const data = resp.data
        const action = initListAction(data)
        yield put(action)
    } catch (e) {
        console.log('倒霉催的 请求失败')
    }
}

export default mySaga;