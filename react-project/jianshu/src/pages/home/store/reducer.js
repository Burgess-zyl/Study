import { fromJS } from 'immutable'

const defaultState = fromJS({
    list: [
        {
            id: 1,
            title: '婚礼前夜｜微小说',
            content: '那年，他，28岁。她，18岁。 他强暴了她。 他哭着跪在她的父母面前，说他恩将仇报，不配为人，他说他愿意自断手指以示惩戒。手起刀落瞬间，她的父亲...'
        }
    ]
})

export default (state=defaultState, action) => {
    return state
}