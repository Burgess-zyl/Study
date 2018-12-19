import { GET_ARTICLE_DETAILS } from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

const articleDetails = (data) => ({
    type: GET_ARTICLE_DETAILS,
    data: fromJS(data)
})

export const getArticleDetails = () => {
    // return function (dispatch) {
    //     axios.get('http://localhost:3000/api/article_list.json').then((resp) => {
    //         console.log('>?>?>?')
    //         const data = resp.data.data
    //         const action = articleDetails(data)
    //         dispatch(action)
    //     }).catch(() => {
    //         console.log('请求是失败')
    //     })
    // }

    return function (dispatch) {
        axios.get('http://localhost:3000/api/detail.json').then(resp => {
            const data = resp.data.data
            console.log(data)
            const action = articleDetails(data)
            dispatch(action)
        })
    }
}