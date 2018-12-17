import { GET_ARTICLE_LIST, GET_RECOMMEND_LIST, GET_WRITER_LIST } from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

function getList (dispatch, url, getAction) {
    axios.get(url).then((resp) => {
        const list = resp.data.data
        const action = getAction(list)
        dispatch(action)
    }).catch(() => {
        console.log('请求是失败')
    })
}

const articleList = (data) => ({
    type: GET_ARTICLE_LIST,
    data: fromJS(data)
})

const recommendList = (data) => ({
    type: GET_RECOMMEND_LIST,
    data: fromJS(data)
})

const writerList = (data) => ({
    type: GET_WRITER_LIST,
    data: fromJS(data)
})

export const getArticleList = () => {
    return (dispatch) => {
        getList(dispatch, './api/article_list.json', articleList)
    }
}

export const getRecommendList = () => {
    return (dispatch) => {
        getList(dispatch, './api/recommend_list.json', recommendList)
    }
}

export const getWriterList = () => {
    return (dispatch) => {
        getList(dispatch, './api/writer_list.json', writerList)
    }
}